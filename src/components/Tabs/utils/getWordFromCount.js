const getWordFromCount = (count) => {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `Найдено ${count} курсов`
  }

  if (lastDigit === 1) {
    return `Найден ${count} курс`
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `Найдено ${count} курса`
  }

  return `Найдено ${count} курсов`
}

export default getWordFromCount
