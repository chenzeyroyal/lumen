import "./Header.scss"

import Logo from "@/components/Logo"
import Button from "@/components/Button"
import menuItems from "./utlis/menuItems"
import courseGroups from "@/utils/courseGroups"

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__wrapper">
          <Logo className="header__logo" />

          <Button
            className="header__button burger-button"
            title="Каталог"
            label="Каталог"
            extraAttrs={{
              "data-js-cat-button": "",
            }}
            isAccent
          >
            <svg
              className="burger-button__svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <path
                className="burger-button__line burger-button__line--1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path
                className="burger-button__line burger-button__line--2"
                d="M 20,50 H 80"
              />
              <path
                className="burger-button__line burger-button__line--3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </Button>

          <div className="header__catalog catalog" data-js-cat-menu="">
            <nav className="catalog-nav">
              <ul className="catalog-list">
                {courseGroups.map(({ title, href, icon }) => (
                  <li className="catalog-item">
                    <Button className="catalog-link" href={href} label={title}>
                      {icon}
                    </Button>
                  </li>
                ))}
                <li className="catalog-item">
                  {" "}
                  <Button
                    className="catalog-link"
                    href="/courses"
                    label="Все курсы"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-layout-grid-icon lucide-layout-grid"
                    >
                      <rect width="7" height="7" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <nav className="header__menu hidden-tablet">
          <ul className="header__menu-list" data-js-menu-list="">
            {menuItems.map(({ title, href }) => (
              <li className="header__menu-item">
                <Button
                  className="header__menu-link"
                  href={href}
                  label={title}
                  iconPos="right"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
