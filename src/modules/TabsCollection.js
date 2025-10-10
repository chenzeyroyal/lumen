import getParams from "@/utils/getParams"
import pxToRem from "@/utils/pxToRem"

const rootSelector = "[data-js-tabs]"

class Tabs {
  selectors = {
    root: rootSelector,
    courseItem: "[data-js-course-card]",

    navigation: "[data-js-tabs-navigation]",
    button: "[data-js-tabs-button]",
    content: "[data-js-tabs-content]",
    contentTitle: "[data-js-tabs-content-title]",
  }

  stateClasses = {
    isActive: "is-active",
    hidden: "visually-hidden",
  }

  layouts = {
    column: "column",
    row: "row",
  }

  stateCSSVariables = {
    activeButtonWidth: "--tabsActiveButtonWidth",
    activeButtonOffsetLeft: "--tabsActiveButtonOffsetLeft",
  }

  constructor(rootElement) {
    this.rootElement = rootElement

    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)

    this.buttonElements = [
      ...this.navigationElement.querySelectorAll(this.selectors.button),
    ]
    this.contentElements = [
      ...this.rootElement.querySelectorAll(this.selectors.content),
    ]

    this.state = {
      activeTabIndex: this.buttonElements.findIndex(
        ({ ariaSelected }) => ariaSelected
      ),
    }

    this.bindEvents()
    this.bindObservers()
  }

  updateUI() {
    const { activeTabIndex } = this.state

    this.buttonElements.forEach((buttonElement, index) => {
      const isActive = index === activeTabIndex

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
      buttonElement.ariaSelected = isActive
      buttonElement.tabIndex = isActive ? 0 : -1

      if (isActive) {
        this.updateNavigationCSSVars(buttonElement)
      }
    })

    this.contentElements.forEach((contentElement, index) => {
      const isActive = index === activeTabIndex

      contentElement.classList.toggle(this.stateClasses.isActive, isActive)
    })
  }

  updateNavigationCSSVars(
    activeButtonElement = this.buttonElements[this.state.activeTabIndex]
  ) {
    const { width, left } = activeButtonElement.getBoundingClientRect()

    const offsetLeft =
      left - this.navigationElement.getBoundingClientRect().left

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonWidth,
      `${pxToRem(width)}rem`
    )

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonOffsetLeft,
      `${pxToRem(offsetLeft)}rem`
    )
  }

  getVisibleCourses(element, maxDuration) {
    const courseItems = element.querySelectorAll(this.selectors.courseItem)
    const visibleCourses = []

    courseItems.forEach((courseItem) => {
      const courseDuration = courseItem.dataset.jsCourseCard
      const isVisible = courseDuration <= maxDuration
      courseItem.classList.toggle(this.stateClasses.hidden, !isVisible)

      if (isVisible) {
        visibleCourses.push(courseItem)
      }
    })
    return visibleCourses
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIndex = buttonIndex
    this.updateUI()
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener("click", () => this.onButtonClick(index))
    })
  }

  onResize = () => {
    this.updateNavigationCSSVars()
  }

  bindObservers = () => {
    const resizeObserver = new ResizeObserver(this.onResize)

    resizeObserver.observe(this.navigationElement)
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tabs(element)
    })
  }
}

export default TabsCollection
