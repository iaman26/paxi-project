export const formatDateWithSuffix = (inputDate: string): string => {
  const dayjs = useDayjs()
  const dateObject = dayjs(inputDate, { format: 'YYYY-MM-DD' })
  const dayWithSuffix = getDayWithSuffix(dateObject.date())
  return `${dayWithSuffix} ${dateObject.format('MMM YYYY')}`
}

export const getDayWithSuffix = (day: number) => {
  if (day >= 11 && day <= 13) {
    return `${day}th`
  }

  switch (day % 10) {
    case 1:
      return `${day}st`
    case 2:
      return `${day}nd`
    case 3:
      return `${day}rd`
    default:
      return `${day}th`
  }
}
