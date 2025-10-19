import getWordFromCount from "@/utils/getWordFromCount"
import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector"
import getParams from "@/utils/getParams"
import parseDuration from "@/utils/parseDuration"
import BaseComponent from "./generic/BaseComponent"

class Filters extends BaseComponent {
  selectors = {
    root: "[data-js-filters]",
    radioButton: "[data-js-radio-button]",
    controlButton: "[data-js-filter-button]",
    cancelSelectedButton: "[data-js-cancel-selected-button]",
    rangeSlider: "[data-js-range-slider]",
    courseItem: "[data-js-course-item]",
    coursesTitle: "[data-js-courses-title]",
    rangeSubtitle: "[data-js-range-subtitle]",
  }

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
    hidden: "visually-hidden",
  }

  stateCSSVariables = {
    progress: "--slider-progress",
  }

  initialState = {
    category: "Все программы",
    duration: 24,
  }

  filterTypes = {
    category: "category",
    range: "range",
  }

  constructor() {
    super()

    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) return

    this.radioButtons = this.rootElement.querySelectorAll(
      this.selectors.radioButton
    )
    this.rangeSlider = this.rootElement.querySelector(
      this.selectors.rangeSlider
    )
    this.rangeSubtitle = document.querySelector(this.selectors.rangeSubtitle)
    this.controlButtons = document.querySelectorAll(
      this.selectors.controlButton
    )

    this.cancelSelectedButtons = document.querySelectorAll(
      this.selectors.cancelSelectedButton
    )
    this.courseItems = document.querySelectorAll(this.selectors.courseItem)
    this.coursesTitle = document.querySelector(this.selectors.coursesTitle)

    this.state = this.getProxyState({ ...this.initialState })

    this.actions = {
      close: this.closeFilters,
      display: this.showFilters,
      cancel: this.cancelFilters,
      apply: this.closeFilters,
    }

    this.visibleCourses = [...this.courseItems]

    this.updateUI()
    this.bindEvents()
  }

  updateUI() {
    this.filterCourses()

    const updateSliderStyle = () => {
      const value =
        ((this.state.duration - this.rangeSlider.min) /
          (this.rangeSlider.max - this.rangeSlider.min)) *
        100

      this.rangeSlider.style.setProperty(
        this.stateCSSVariables.progress,
        `${value}%`
      )
    }

    const updateAppliedFilters = () => {
      this.cancelSelectedButtons.forEach((button) => {
        const buttonType = button.getAttribute(
          getAttrNameFromSelector(this.selectors.cancelSelectedButton)
        )

        const isFiltered = this.isFiltered
        if (!isFiltered) {
          button.classList.remove(this.stateClasses.isActive)
          button.querySelector("span").textContent = ""
          return
        }

        if (
          buttonType === this.filterTypes.category &&
          this.state.category !== this.initialState.category
        ) {
          button.querySelector("span").textContent = this.state.category
          button.classList.add(this.stateClasses.isActive)
        }

        if (
          buttonType === this.filterTypes.range &&
          this.state.duration !== this.initialState.duration
        ) {
          button.classList.add(this.stateClasses.isActive)
          button.querySelector("span").textContent = getWordFromCount(
            this.state.duration,
            this.filterTypes.range
          )
        }
      })
    }

    const updateTitles = () => {
      this.coursesTitle.textContent = getWordFromCount(
        this.visibleCourses.length,
        "courses"
      )

      this.rangeSubtitle.textContent = `от ${
        this.rangeSlider.min
      } до ${getWordFromCount(this.rangeSlider.value, this.filterTypes.range)}`
    }

    updateSliderStyle()
    updateAppliedFilters()
    updateTitles()
  }

  get isFiltered() {
    return (
      this.state.category !== this.initialState.category ||
      this.state.duration !== this.initialState.duration
    )
  }

  filterCourses() {
    this.visibleCourses = []
    this.courseItems.forEach((course) => {
      const courseParams = getParams(course, this.selectors.courseItem)
      const courseId = courseParams.title
      const courseDuration = parseDuration(courseParams.duration)

      const { category, duration } = this.state

      const isVisible =
        category === "Все программы"
          ? courseDuration <= duration
          : courseId === category && courseDuration <= duration

      isVisible && this.visibleCourses.push(course)
      course.classList.toggle(this.stateClasses.hidden, !isVisible)
    })

    this.showButtons()
  }

  filterByCategories(button) {
    this.state.category = button.value
  }

  filterByRange() {
    this.state.duration = +this.rangeSlider.value
  }

  showButtons() {
    const isFiltered = this.isFiltered
    if (!isFiltered) return

    this.controlButtons.forEach((button) => {
      button.classList.add(this.stateClasses.isActive)
    })
  }

  hideButtons() {
    this.controlButtons.forEach((button) => {
      button.classList.remove(this.stateClasses.isActive)
    })
  }

  showFilters = () => {
    this.rootElement.classList.add(this.stateClasses.isActive)

    this.radioButtons.forEach((button) => {
      if (button.value !== this.state.category) {
        button.checked = false
      } else {
        button.checked = true
      }
    })

    this.rangeSlider.value = this.state.duration

    this.showButtons()
    this.lockScroll()
  }

  closeFilters = () => {
    this.rootElement.classList.remove(this.stateClasses.isActive)

    this.unlockScroll()
    this.hideButtons()
  }

  lockScroll() {
    document.documentElement.classList.add(this.stateClasses.isLock)
  }

  unlockScroll() {
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  cancelFilters = () => {
    this.state.category = this.initialState.category
    this.state.duration = this.initialState.duration

    this.rangeSlider.value = this.state.duration
    this.closeFilters()
  }

  cancelSelectedFilter = (e) => {
    const filterType = e.target.getAttribute(
      getAttrNameFromSelector(this.selectors.cancelSelectedButton)
    )

    if (filterType === this.filterTypes.category) {
      this.state.category = this.initialState.category
      e.target.classList.remove(this.stateClasses.isActive)
    }

    if (filterType === this.filterTypes.range) {
      this.state.duration = this.initialState.duration
      e.target.classList.remove(this.stateClasses.isActive)
    }
  }

  onRangeInput() {
    this.filterByRange()
  }

  onButtonClick(button) {
    this.filterByCategories(button)
  }

  bindEvents() {
    this.radioButtons.forEach((button) => {
      button.addEventListener("click", () => this.onButtonClick(button))
    })
    this.rangeSlider.addEventListener("input", () => this.onRangeInput())
    this.controlButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const action = button.getAttribute(
          getAttrNameFromSelector(this.selectors.controlButton)
        )
        const handler = this.actions[action]

        if (typeof handler === "function") handler(e)
      })
    })
    this.cancelSelectedButtons.forEach((button) =>
      button.addEventListener("click", (e) => this.cancelSelectedFilter(e))
    )
  }
}

export default Filters
