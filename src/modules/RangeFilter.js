class RangeFilter {
  selectors = {
    root: "[data-js-range-filter]",
    slider: "[data-js-duration-slider]",
  }
  stateCSSVariables = {
    progress: "--slider-progress",
  }

  constructor(element) {
    this.rootElement = element.querySelector(this.selectors.root)
    this.sliderElement = this.rootElement.querySelector(this.selectors.slider)

    this.callbacks = {
      onInput: null,
    }

    this.updateSliderStyle()
  }

  updateSliderStyle() {
    const value =
      ((this.sliderElement.value - this.sliderElement.min) /
        (this.sliderElement.max - this.sliderElement.min)) *
      100

    this.sliderElement.style.setProperty(
      this.stateCSSVariables.progress,
      `${value}%`
    )
  }
  updateCoursesCount() {}

  getValue() {
    return this.sliderElement ? parseInt(this.sliderElement.value) : 0
  }

  setValue(value) {
    this.sliderElement.value = value
  }

  onInput(callback) {
    this.callbacks.onInput = callback
    if (this.sliderElement) {
      this.sliderElement.addEventListener("input", () => {
        callback()
        this.updateSliderStyle()
      })
    }
  }
}

export default RangeFilter
