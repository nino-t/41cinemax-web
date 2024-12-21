/* eslint-disable @typescript-eslint/no-explicit-any */

import { promises as fs } from 'fs'
import path from 'path'

type Query<T> = Partial<T>

export class SimpleDB<Schema extends Record<string, any[]>> {
  private filename: string
  private data: Schema | null

  constructor(filename: string) {
    this.filename = filename
    this.data = null
  }

  async init(): Promise<SimpleDB<Schema>> {
    try {
      const content = await fs.readFile(this.filename, 'utf8')
      this.data = JSON.parse(content)
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        // File doesn't exist, create new database with empty collections
        this.data = Object.create(null) as Schema
        await this.write()
      } else {
        throw error
      }
    }
    return this
  }

  private async write(): Promise<SimpleDB<Schema>> {
    const dirname = path.dirname(this.filename)
    await fs.mkdir(dirname, { recursive: true })
    await fs.writeFile(this.filename, JSON.stringify(this.data, null, 2))
    return this
  }

  // Get entire database
  getAll(): Schema
  // Get specific collection
  getAll<K extends keyof Schema>(collection: K): Schema[K]
  getAll<K extends keyof Schema>(collection?: K): Schema | Schema[K] {
    if (!this.data) throw new Error('Database not initialized')

    if (collection) {
      return (this.data[collection] || []) as Schema[K]
    }
    return this.data
  }

  // Set data for a collection
  async set<K extends keyof Schema>(
    collection: K,
    value: Schema[K]
  ): Promise<SimpleDB<Schema>> {
    if (!this.data) throw new Error('Database not initialized')

    this.data[collection] = value
    await this.write()
    return this
  }

  // Push item to collection array
  async push<K extends keyof Schema>(
    collection: K,
    item: Schema[K][number]
  ): Promise<SimpleDB<Schema>> {
    if (!this.data) throw new Error('Database not initialized')

    if (!this.data[collection]) {
      this.data[collection] = [] as unknown as Schema[K]
    }
    ;(this.data[collection] as Schema[K]).push(item)
    await this.write()
    return this
  }

  // Find items in collection
  find<K extends keyof Schema>(
    collection: K,
    query?: Query<Schema[K][number]>
  ): Schema[K][number][] {
    if (!this.data) throw new Error('Database not initialized')

    const items = this.data[collection] || []
    if (!query) return items

    return items.filter((item) => {
      return Object.entries(query).every(([key, value]) => item[key] === value)
    })
  }

  // Find first matching item
  findOne<K extends keyof Schema>(
    collection: K,
    query: Query<Schema[K][number]>
  ): Schema[K][number] | undefined {
    return this.find(collection, query)[0]
  }

  // Update items in collection
  async update<K extends keyof Schema>(
    collection: K,
    query: Query<Schema[K][number]>,
    updates: Partial<Schema[K][number]>
  ): Promise<Schema[K][number][]> {
    if (!this.data) throw new Error('Database not initialized')

    const items = this.find(collection, query)
    items.forEach((item) => {
      Object.assign(item, updates)
    })
    await this.write()
    return items
  }

  // Remove items from collection
  async remove<K extends keyof Schema>(
    collection: K,
    query: Query<Schema[K][number]>
  ): Promise<number> {
    if (!this.data) throw new Error('Database not initialized')
    if (!this.data[collection]) return 0

    const initialLength = this.data[collection].length
    this.data[collection] = this.data[collection].filter((item) => {
      return !Object.entries(query).every(([key, value]) => item[key] === value)
    }) as Schema[K]

    await this.write()
    return initialLength - this.data[collection].length
  }
}
