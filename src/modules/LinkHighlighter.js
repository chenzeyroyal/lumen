class LinkHighlighter {
  selectors = {
    navigation: "[data-js-section-navigation]",
    link: "[data-js-section-navigation-link]",
  }

  stateClasses = {
    isActive: "is-active",
  }

  constructor() {
    this.currentPath = window.location.pathname.replace(/\/$/, "")
    this.navigationElement = document.querySelector(this.selectors.navigation)

    if (!this.navigationElement) return

    this.navigationLinks = this.navigationElement.querySelectorAll(
      this.selectors.link,
    )
    this.updateLinkStyle()
  }

  updateLinkStyle() {
    this.navigationLinks.forEach((link) => {
      const linkPath = link.getAttribute("href").replace(/\/$/, "")
      if (linkPath === this.currentPath) {
        link.classList.add(this.stateClasses.isActive)
      } else {
        link.classList.remove(this.stateClasses.isActive)
      }
    })
  }
}

export default LinkHighlighter
