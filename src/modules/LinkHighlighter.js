class LinkHighlighter {
  selectors = {
    navigation: "[data-js-section-navigation]",
    link: "[data-js-section-navigation-link]",
  }

  stateClasses = {
    isActive: "is-active",
  }

  constructor() {
    this.currentPath = window.location.pathname
    this.navigationElement = document.querySelector(this.selectors.navigation)

    if (!this.navigationElement) return

    this.navigationLinks = this.navigationElement.querySelectorAll(
      this.selectors.link
    )
    this.updateLinkStyle()
  }

  updateLinkStyle() {
    this.navigationLinks.forEach((link) => {
      const linkPath = link.getAttribute("href")
      if (linkPath === this.currentPath)
        link.classList.toggle(this.stateClasses.isActive)
    })
  }
}

export default LinkHighlighter
