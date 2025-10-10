// Классный, самодостаточный контрол фильтров для Courses.
// Он ждёт DOMContentLoaded и пытается инициализироваться автоматически.
class CoursesFilters {
  constructor(rootSelector = "[data-js-courses]") {
    this.rootSelector = rootSelector
    this.debounceDelay = 120
    this.root = document.querySelector(this.rootSelector)
    if (!this.root) return
    this._debounceTimer = null
    this._init()
  }

  _init() {
    this._cacheDOM()
    if (!this.courseItems || !this.courseItems.length) return
    this._buildSubcategoryControls()
    this._bindEvents()
    this.applyFilters() // начальная фильтрация (показываем всё в диапазоне по умолчанию)
  }

  _cacheDOM() {
    this.filtersWrapper = this.root.querySelector("[data-js-courses-filters]")
    this.subcategoriesContainer = this.root.querySelector(
      "[data-js-subcategory-filters]"
    )
    this.rangeMinInput = this.root.querySelector("[data-js-range-min]")
    this.rangeMaxInput = this.root.querySelector("[data-js-range-max]")
    this.periodValue = this.root.querySelector("[data-js-period-value]")
    this.sliderRoots = Array.from(
      this.root.querySelectorAll("[data-js-slider-root]")
    )

    // все карточки курсов — элементы, которые мы пометили data-js-course-item
    this.courseItems = Array.from(
      this.root.querySelectorAll("[data-js-course-item]")
    ).map((el) => {
      const duration = Number(el.dataset.duration) || 0
      return {
        el,
        duration,
        subcategory: el.dataset.subcategory,
        subcategoryTitle:
          el.dataset.subcategoryTitle || el.dataset.subcategory || "",
        group: el.dataset.group || "",
      }
    })

    // если range отсутствует/значения не заданы — вычислим min/max из DOM
    const durations = this.courseItems.map((i) => i.duration).filter(Boolean)
    this.minDuration = durations.length ? Math.min(...durations) : 0
    this.maxDuration = durations.length ? Math.max(...durations) : 0

    if (this.rangeMinInput) {
      this.rangeMinInput.min = this.minDuration
      this.rangeMinInput.max = this.maxDuration
      if (!this.rangeMinInput.value) this.rangeMinInput.value = this.minDuration
    }
    if (this.rangeMaxInput) {
      this.rangeMaxInput.min = this.minDuration
      this.rangeMaxInput.max = this.maxDuration
      if (!this.rangeMaxInput.value) this.rangeMaxInput.value = this.maxDuration
    }
    // начальное значение лейбла
    this._updateRangeLabel()
  }

  _buildSubcategoryControls() {
    if (!this.subcategoriesContainer) return
    // собираем уникальные подкатегории
    const map = new Map()
    this.courseItems.forEach((it) => {
      if (!map.has(it.subcategory))
        map.set(it.subcategory, it.subcategoryTitle || it.subcategory)
    })

    // очищаем и рендерим чекбоксы
    this.subcategoriesContainer.innerHTML = ""
    map.forEach((title, id) => {
      const label = document.createElement("label")
      label.className = "filter-subcategory"
      label.innerHTML = `
        <input type="checkbox" value="${id}" checked />
        <span class="filter-subcategory-title">${this._escapeHtml(title)}</span>
      `
      this.subcategoriesContainer.appendChild(label)
    })
  }

  _bindEvents() {
    if (this.subcategoriesContainer) {
      this.subcategoriesContainer.addEventListener("change", (e) => {
        if (e.target && e.target.matches("input[type=checkbox]"))
          this._debouncedApply()
      })
    }

    if (this.rangeMinInput && this.rangeMaxInput) {
      // следим за input, и нормально поддерживаем min <= max
      const onRangeInput = () => {
        const minVal = Number(this.rangeMinInput.value)
        const maxVal = Number(this.rangeMaxInput.value)
        if (minVal > maxVal) {
          // если пользователь двигает нижний сдвинуть верхний, либо наоборот — сделаем swap
          // логика: если активный элемент — min, то подвинем max; иначе — подвинем min
          if (document.activeElement === this.rangeMinInput) {
            this.rangeMaxInput.value = this.rangeMinInput.value
          } else {
            this.rangeMinInput.value = this.rangeMaxInput.value
          }
        }
        this._updateRangeLabel()
        this._debouncedApply()
      }

      this.rangeMinInput.addEventListener("input", onRangeInput)
      this.rangeMaxInput.addEventListener("input", onRangeInput)
    }
  }

  _updateRangeLabel() {
    if (!this.periodValue || !this.rangeMinInput || !this.rangeMaxInput) return
    this.periodValue.textContent = `${this.rangeMinInput.value} — ${this.rangeMaxInput.value} мес.`
  }

  _debouncedApply() {
    clearTimeout(this._debounceTimer)
    this._debounceTimer = setTimeout(
      () => this.applyFilters(),
      this.debounceDelay
    )
  }

  applyFilters() {
    // Собираем выбранные подкатегории
    const checkedBoxes = this.subcategoriesContainer
      ? Array.from(
          this.subcategoriesContainer.querySelectorAll(
            "input[type=checkbox]:checked"
          )
        ).map((cb) => cb.value)
      : []

    const min = this.rangeMinInput
      ? Number(this.rangeMinInput.value)
      : this.minDuration
    const max = this.rangeMaxInput
      ? Number(this.rangeMaxInput.value)
      : this.maxDuration

    // Если пользователь снял все чекбоксы — считаем, что выбраны все
    const activeSubcats = checkedBoxes.length
      ? checkedBoxes
      : Array.from(new Set(this.courseItems.map((i) => i.subcategory)))

    // Применяем фильтры
    this.courseItems.forEach((item) => {
      const matchesDuration = item.duration >= min && item.duration <= max
      const matchesSubcat = activeSubcats.includes(item.subcategory)
      const shouldShow = matchesDuration && matchesSubcat

      // Получаем сам слайд (.swiper-slide или .slider__item)
      const slideEl =
        item.el.closest(".swiper-slide") || item.el.closest(".slider__item")

      if (shouldShow) {
        // Показываем
        item.el.classList.remove("courses__slide--hidden")
        item.el.removeAttribute("aria-hidden")

        if (slideEl) {
          slideEl.classList.remove("courses__slide--hidden")
          slideEl.removeAttribute("aria-hidden")
        }
      } else {
        // Скрываем
        item.el.classList.add("courses__slide--hidden")
        item.el.setAttribute("aria-hidden", "true")

        if (slideEl) {
          slideEl.classList.add("courses__slide--hidden")
          slideEl.setAttribute("aria-hidden", "true")
        }
      }
    })

    // После изменений — обновляем слайдеры
    this._attemptUpdateSliders()
  }

  _attemptUpdateSliders() {
    // 1) для каждого slider-root — ищем известные контейнеры и пытаемся вызвать update/refresh.
    this.sliderRoots.forEach((root) => {
      // ищем возможные контейнеры популярных библиотек
      const sliderEl = root.querySelector(
        ".swiper, .splide, .keen-slider, .glide, .slider"
      )
      if (sliderEl) {
        // Swiper (самый распространённый кейс)
        try {
          if (sliderEl.swiper && typeof sliderEl.swiper.update === "function") {
            sliderEl.swiper.update()
            return
          }
          if (
            sliderEl.__swiper &&
            typeof sliderEl.__swiper.update === "function"
          ) {
            sliderEl.__swiper.update()
            return
          }
          // Splide.js
          if (
            sliderEl._splide &&
            typeof sliderEl._splide.refresh === "function"
          ) {
            sliderEl._splide.refresh()
            return
          }
          // Keen / Glide — попытки безопасно вызвать метод обновления
          if (sliderEl._keen && typeof sliderEl._keen.refresh === "function") {
            sliderEl._keen.refresh()
            return
          }
          if (sliderEl._glide && typeof sliderEl._glide.update === "function") {
            sliderEl._glide.update()
            return
          }
        } catch (err) {
          // не фатально — поймаем и продолжим
          // console.warn("Slider update attempt failed", err);
        }
      }

      // 2) fallback: триггерим resize и кастомное событие — многие реализации реагируют на resize или могут подписаться
      window.dispatchEvent(new Event("resize"))
      root.dispatchEvent(new CustomEvent("slider:update", { bubbles: true }))
    })
  }

  // escape для безопасного innerHTML заголовков
  _escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
  }
}

// Автоинициализация после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  try {
    new CoursesFilters()
  } catch (e) {
    // ничего не ломаем в runtime
    // console.error("CoursesFilters init error", e);
  }
})

export default CoursesFilters
