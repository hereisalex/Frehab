import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateSobrietyTime(startDate: Date): { years: number; months: number; days: number } {
  const today = new Date()
  const start = new Date(startDate)
  
  // Reset time to midnight for accurate day calculation
  today.setHours(0, 0, 0, 0)
  start.setHours(0, 0, 0, 0)
  
  // Calculate total days
  const timeDiff = today.getTime() - start.getTime()
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  
  // Calculate years, months, and remaining days
  let years = 0
  let months = 0
  let days = totalDays
  
  // Calculate years
  while (days >= 365) {
    const isLeapYear = (start.getFullYear() + years) % 4 === 0 && 
                      ((start.getFullYear() + years) % 100 !== 0 || (start.getFullYear() + years) % 400 === 0)
    const daysInYear = isLeapYear ? 366 : 365
    
    if (days >= daysInYear) {
      years++
      days -= daysInYear
    } else {
      break
    }
  }
  
  // Calculate months
  const tempDate = new Date(start)
  tempDate.setFullYear(tempDate.getFullYear() + years)
  
  while (days > 0) {
    const currentMonth = tempDate.getMonth()
    const daysInCurrentMonth = new Date(tempDate.getFullYear(), currentMonth + 1, 0).getDate()
    
    if (days >= daysInCurrentMonth) {
      months++
      days -= daysInCurrentMonth
      tempDate.setMonth(currentMonth + 1)
    } else {
      break
    }
  }
  
  return { years, months, days }
} 