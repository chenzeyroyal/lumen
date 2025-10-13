const getWordFromCount = (count, mode) => {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (mode === "courses") {
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

  if (mode === "range") {
    if (lastDigit === 1) {
      return `до ${count} месяца`
    }

    return `до ${count} месяцев`
  }
}

export default getWordFromCount
