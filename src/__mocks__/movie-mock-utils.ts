/**
 * Utils untuk generate waktu tayang secara acak
 * @param options
 * @returns
 */
const generateShowtimes = (
  options: {
    startHour?: number
    endHour?: number
    count?: number
    intervalMinutes?: number
  } = {}
) => {
  const {
    startHour = 10, // Default mulai jam 10 pagi
    endHour = 22, // Default selesai jam 10 malam
    count = 6, // Default 6 jadwal tayang
    intervalMinutes = 90 // Default interval 1.5 jam
  } = options

  // Konversi semua waktu ke menit untuk perhitungan lebih mudah
  const startMinutes = startHour * 60
  const endMinutes = endHour * 60

  // Menghasilkan semua slot waktu yang memungkinkan
  const possibleSlots: string[] = []

  for (
    let minutes = startMinutes;
    minutes <= endMinutes - intervalMinutes;
    minutes += 30
  ) {
    // Format menit ke HH:mm
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    const timeString = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
    possibleSlots.push(timeString)
  }

  // Mengacak dan memilih slot waktu dengan memastikan interval minimum
  const selectedSlots: string[] = []
  const shuffledSlots = [...possibleSlots].sort(() => Math.random() - 0.5)

  for (const slot of shuffledSlots) {
    if (selectedSlots.length >= count) break

    // Konversi slot saat ini ke menit
    const [hours, minutes] = slot.split(':').map(Number)
    const currentMinutes = hours * 60 + minutes

    // Cek apakah slot ini memenuhi interval minimum dengan slot yang sudah dipilih
    const isValidSlot = selectedSlots.every((existing) => {
      const [existingHours, existingMinutes] = existing.split(':').map(Number)
      const existingTotalMinutes = existingHours * 60 + existingMinutes
      const difference = Math.abs(currentMinutes - existingTotalMinutes)
      return difference >= intervalMinutes
    })

    if (isValidSlot) {
      selectedSlots.push(slot)
    }
  }

  // Urutkan secara kronologis
  return selectedSlots.sort((a, b) => {
    const [hoursA, minutesA] = a.split(':').map(Number)
    const [hoursB, minutesB] = b.split(':').map(Number)
    return hoursA * 60 + minutesA - (hoursB * 60 + minutesB)
  })
}

/**
 * Utils untuk generate schedule palsu untuk film
 * @param movieId
 * @returns
 */
export const generateFakeSchedule = (movieId: number) => {
  const date = new Date()
  const schedules = []
  const timeFrames = generateShowtimes({
    startHour: 8, // Mulai dari jam 8 pagi
    endHour: 23, // Selesai sebelum jam 11 malam
    count: 6, // Hasilkan 6 jadwal
    intervalMinutes: 90 // Jarak antar jadwal 1.5 jam
  })

  for (let i = 0; i < 5; i++) {
    date.setDate(date.getDate() + i)
    for (let j = 0; j < timeFrames.length; j++) {
      schedules.push({
        id: schedules.length + 1,
        movie_id: movieId,
        date: date.toISOString().split('T')[0],
        time: timeFrames[j],
        price: (() => {
          const [hours] = timeFrames[j].split(':').map(Number)
          if (hours <= 10) return 45000
          if (hours <= 16) return 50000
          return 55000
        })()
      })
    }
  }

  return schedules
}
