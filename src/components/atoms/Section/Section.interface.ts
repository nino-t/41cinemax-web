import React from 'react'

export interface SectionProps {
  /**
   * Element of the section
   * @type {React.ReactNode}
   * @example <Section>...</Section>
   */
  children: React.ReactNode
  /**
   * Whether the section should have rounded corners
   * @type {boolean}
   * @default false
   * @example <Section rounded>...</Section>
   */
  rounded?: boolean
  /**
   * Additional class name
   * @type {string}
   * @example <Section className="text-center">...</Section>
   */
  className?: string
}
