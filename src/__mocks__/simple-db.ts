/* eslint-disable @typescript-eslint/no-explicit-any */

type Query<T> = Partial<T>

export class SimpleDB<Schema extends Record<string, any[]>> {
  private dbName: string
  private data: Schema | null
  private initialData: Partial<Schema>

  constructor(dbName: string, initialData: Partial<Schema> = {} as any) {
    this.dbName = dbName
    this.data = null
    this.initialData = initialData
  }

  async init(): Promise<SimpleDB<Schema>> {
    try {
      const content = localStorage.getItem(this.dbName)
      if (content) {
        this.data = JSON.parse(content)
      } else {
        // Gunakan initial data jika tidak ada data di localStorage
        this.data = { ...Object.create(null), ...this.initialData } as Schema
        await this.write()
      }
    } catch (error) {
      // Jika terjadi error, gunakan initial data
      console.error('Failed to initialize database:', error)
      this.data = { ...Object.create(null), ...this.initialData } as Schema
      await this.write()
    }
    return this
  }

  private async write(): Promise<SimpleDB<Schema>> {
    localStorage.setItem(this.dbName, JSON.stringify(this.data, null, 2))
    return this
  }

  // Reset database ke initial values
  async reset(): Promise<SimpleDB<Schema>> {
    this.data = { ...Object.create(null), ...this.initialData } as Schema
    await this.write()
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
