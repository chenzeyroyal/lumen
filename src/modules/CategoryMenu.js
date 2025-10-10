class CategoryMenu {
  selectors = {
    root: "[data-js-cat-menu]",
    button: "[data-js-cat-button]",
  }
  stateClasses = {
    isActive: "is-active",
  }

  constructor() {
    this.menu = document.querySelector(this.selectors.root)
    this.button = document.querySelector(this.selectors.button)

    this.bindEvents()
  }

  toggleMenu() {
    this.menu.classList.toggle(this.stateClasses.isActive)
  }

  toggleButton() {
    this.button.classList.toggle(this.stateClasses.isActive)
  }

  bindEvents() {
    this.button.addEventListener("click", () => {
      this.toggleMenu()
      this.toggleButton()
    })
  }
}

export default CategoryMenu
