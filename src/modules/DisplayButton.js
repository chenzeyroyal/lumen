class DisplayButton {
  selectors = {
    root: "[data-js-display-button]",
    container: "[data-js-display-container]",
    dropdown: "[data-js-dropdown]",
  }
  stateClasses = {
    isActive: "is-active",
  }

  constructor() {
    this.buttonElements = document.querySelectorAll(this.selectors.root)

    this.bindEvents()
  }

  toggleVisible(element) {
    element.classList.toggle(this.stateClasses.isActive)
  }

  toggleButtonIcon(button) {
    button.classList.toggle(this.stateClasses.isActive)
  }

  bindEvents() {
    this.buttonElements.forEach((button) => {
      const parent = button.closest(this.selectors.container)
      button.addEventListener("click", () => {
        const controllElement = parent.querySelector(this.selectors.dropdown)

        this.toggleVisible(controllElement)
        this.toggleButtonIcon(button)
      })
    })
  }
}
export default DisplayButton
