import getWordFromCount from "@/components/Tabs/utils/getWordFromCount"
import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector"
import getParams from "@/utils/getParams"
import parseDuration from "@/utils/parseDuration"

class Filters {
  selectors = {
    root: "[data-js-filters]",
    radioButton: "[data-js-radio-button]",
    rangeSlider: "[data-js-range-slider]",
    courseItem: "[data-js-course-item]",
    coursesTitle: "[data-js-courses-title]",
    userButtons: "[data-js-filter-button]",
    displayButton: "[data-js-display-button]",
    hideButton: "[data-js-hide-button]",
  }

  stateClasses = {
    isActive: "is-active",
    hidden: "visually-hidden",
  }

  stateCSSVariables = {
    progress: "--slider-progress",
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.radioButtons = this.rootElement.querySelectorAll(
      this.selectors.radioButton
    )
    this.rangeSlider = this.rootElement.querySelector(
      this.selectors.rangeSlider
    )
    this.displayButton = document.querySelector(this.selectors.displayButton)
    this.hideButton = document.querySelector(this.selectors.hideButton)

    this.userButtons = document.querySelectorAll(this.selectors.userButtons)

    this.courseItems = document.querySelectorAll(this.selectors.courseItem)
    this.coursesTitle = document.querySelector(this.selectors.coursesTitle)

    this.state = { id: "all", duration: 24, filtered: false }

    this.visibleCourses = [...this.courseItems]

    this.updateTitle()
    this.bindEvents()
  }

  filterCourses() {
    this.visibleCourses = []
    this.courseItems.forEach((course) => {
      const courseParams = getParams(course, this.selectors.courseItem)
      const courseId = courseParams.id
      const courseDuration = parseDuration(courseParams.duration)

      const isVisible =
        this.state.id === "all"
          ? courseDuration <= this.state.duration
          : courseId === this.state.id && courseDuration <= this.state.duration

      isVisible && this.visibleCourses.push(course)
      course.classList.toggle(this.stateClasses.hidden, !isVisible)
    })
    this.showButtons()
    this.updateTitle()
  }

  filterByCategories(buttonId) {
    this.state.id = buttonId
    this.filterCourses()
  }

  filterByRange() {
    this.state.duration = +this.rangeSlider.value
    this.filterCourses()
  }

  updateTitle() {
    this.coursesTitle.innerHTML = getWordFromCount(this.visibleCourses.length)
  }

  updateSliderStyle() {
    const value =
      ((this.state.duration - this.rangeSlider.min) /
        (this.rangeSlider.max - this.rangeSlider.min)) *
      100

    this.rangeSlider.style.setProperty(
      this.stateCSSVariables.progress,
      `${value}%`
    )
  }

  resetFilters() {
    this.state = { id: "all", duration: 24, filtered: false }
    this.rangeSlider.value = this.state.duration
    this.filterCourses()
    this.updateSliderStyle()
    this.closeModal()
  }

  showButtons() {
    this.userButtons.forEach((button) => {
      button.parentElement.classList.add(this.stateClasses.isActive)
    })
  }

  hideButtons() {
    this.userButtons.forEach((button) => {
      button.parentElement.classList.remove(this.stateClasses.isActive)
    })
  }

  showModal() {
    this.rootElement.classList.add(this.stateClasses.isActive)
  }

  closeModal() {
    this.rootElement.classList.remove(this.stateClasses.isActive)
    this.hideButtons()
  }

  toggleVisibility(button) {
    const buttonType = button.getAttribute(
      getAttrNameFromSelector(this.selectors.userButtons)
    )
    if (buttonType === "cancel") {
      this.resetFilters()
    } else {
      this.closeModal()
    }
  }

  onRangeInut() {
    this.filterByRange()
    this.updateSliderStyle()
  }

  onButtonClick(button) {
    const buttonId = button.getAttribute(
      getAttrNameFromSelector(this.selectors.radioButton)
    )

    this.filterByCategories(buttonId)
  }

  bindEvents() {
    this.radioButtons.forEach((button) => {
      button.addEventListener("click", () => this.onButtonClick(button))
    })
    this.rangeSlider.addEventListener("input", () => this.onRangeInut())
    this.userButtons.forEach((button) => {
      button.addEventListener("click", () => this.toggleVisibility(button))
    })
    this.displayButton.addEventListener("click", () => this.showModal())
    this.hideButton.addEventListener("click", () => this.closeModal())
  }
}

export default Filters
