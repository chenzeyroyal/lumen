// src/scripts/slider/SliderCollection.js  (замените текущую реализацию этим кодом)
import getParams from "@/utils/getParams"
import Swiper from "swiper"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

const rootSelector = "[data-js-slider]"

class Slider {
  selectors = {
    root: rootSelector,
    swiper: "[data-js-slider-swiper]",
    navigation: "[data-js-slider-navigation]",
    previousButton: "[data-js-slider-previous-button]",
    nextButton: "[data-js-slider-next-button]",
    pagination: "[data-js-slider-pagination]",
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.swiperElement = this.rootElement.querySelector(this.selectors.swiper)
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)

    // безопасно получаем элементы навигации (могут быть null)
    this.previousButtonElement =
      this.navigationElement?.querySelector(this.selectors.previousButton) ||
      null
    this.nextButtonElement =
      this.navigationElement?.querySelector(this.selectors.nextButton) || null
    this.paginationElement =
      this.navigationElement?.querySelector(this.selectors.pagination) || null

    this.init()
  }

  init() {
    // конфиг: добавляем observer опции, чтобы Swiper сам реагировал на изменения DOM
    const config = {
      ...this.params.sliderParams,
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        prevEl: this.previousButtonElement,
        nextEl: this.nextButtonElement,
      },
      pagination: {
        el: this.paginationElement,
        bulletClass: "slider-navigation__pagination-bullet",
        bulletActiveClass: "is-active",
      },

      // observer опции — гарантируют автоматическое обновление при изменении DOM
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
    }

    // создаём Swiper и сохраняем инстанс
    this.swiperInstance = new Swiper(this.swiperElement, config)

    // привязываем инстанс к DOM-элементу для внешних вызовов (совместимость)
    try {
      this.swiperElement.swiper = this.swiperInstance
      this.swiperElement.__swiper = this.swiperInstance
      // также сохраняем ссылку на класс инстанса
      this.rootElement._sliderInstance = this
    } catch (e) {
      // не критично, просто игнорируем
    }

    // слушаем кастомное событие — внешние модули (CoursesFilters) могут диспатчить его
    this.rootElement.addEventListener("slider:update", () => {
      try {
        if (
          this.swiperInstance &&
          typeof this.swiperInstance.update === "function"
        ) {
          this.swiperInstance.update()
        }
      } catch (err) {
        // безопасно игнорируем ошибки при обновлении
      }
    })
  }

  // публичный метод на случай необходимости
  update() {
    if (
      this.swiperInstance &&
      typeof this.swiperInstance.update === "function"
    ) {
      this.swiperInstance.update()
    }
  }

  destroy() {
    if (
      this.swiperInstance &&
      typeof this.swiperInstance.destroy === "function"
    ) {
      this.swiperInstance.destroy(true, true)
    }
  }
}

class SliderCollection {
  constructor() {
    this.instances = []
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      const instance = new Slider(element)
      this.instances.push(instance)
    })
  }

  // утилита: обновить все слайдеры вручную
  updateAll() {
    this.instances.forEach((ins) => ins.update())
  }
}

export default SliderCollection
