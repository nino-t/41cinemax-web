import { SeatItem } from '@/components/molecules/SeatButton/SeatButton.interface'

interface GenerateSeatOptions {
  /**
   * Number of rows to generate
   * @type {number}
   * @required
   */
  rowCount: number
  /**
   * Number of columns per row
   * @type {number}
   * @required
   */
  columnCount: number
  /**
   * Optional array of reserved seat IDs
   * @type {string[]}
   * @optional
   */
  reservedSeats?: string[]
  /**
   * Optional array of selected seat IDs
   * @type {string[]}
   * @optional
   */
  selectedSeats?: string[]
}

/**
 * Generates an array of seats based on the given parameters
 * @param options GenerateSeatOptions
 * @returns Array of SeatItem
 */
export const generateSeats = ({
  rowCount,
  columnCount,
  reservedSeats = [],
  selectedSeats = []
}: GenerateSeatOptions): SeatItem[] => {
  // Convert number to alphabet (1 = A, 2 = B, etc)
  const getRowLabel = (index: number): string => {
    return String.fromCharCode(65 + index) // 65 is ASCII for 'A'
  }

  const seats: SeatItem[] = []

  // Generate seats for each row
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    const rowLabel = getRowLabel(rowIndex)

    // Generate seats for each column in the current row
    for (let colIndex = 1; colIndex <= columnCount; colIndex++) {
      const seatId = `${rowLabel}${colIndex}`

      const seat: SeatItem = {
        id: seatId,
        row: rowLabel,
        column: colIndex.toString(),
        label: seatId,
        available: true,
        reserved: reservedSeats.includes(seatId),
        selected: selectedSeats.includes(seatId)
      }

      seats.push(seat)
    }
  }

  return seats
}
