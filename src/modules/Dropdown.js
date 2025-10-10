class Dropdown {
  selectors = {
    root: "[data-js-menu-list]",
    item: "[data-js-dropdown-summary]",
  }
  stateClasses = {
    isActive: "is-active",
  }

  constructor() {
    this.rootEl = document.querySelector(this.selectors.root)
    this.items = this.rootEl.querySelectorAll(this.selectors.item)

    this.bindEvents()
  }

  handleMouseEnter(target) {
    target.classList.add(this.stateClasses.isActive)
  }

  handleMouseLeave(target) {
    target.classList.remove(this.stateClasses.isActive)
  }

  bindEvents() {
    this.items.forEach((item) => {
      item.addEventListener("mouseenter", () => this.handleMouseEnter(item))

      item.addEventListener("mouseleave", () => this.handleMouseLeave(item))
    })
  }
}

export default Dropdown
