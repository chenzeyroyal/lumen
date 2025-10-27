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
            mode="burger"
            extraAttrs={{
              "data-js-cat-button": "",
            }}
            isAccent
          ></Button>

          <div className="header__catalog catalog" data-js-cat-menu="">
            <nav className="catalog-nav">
              <ul className="catalog-list">
                {courseGroups.map(({ title, href, icon }) => (
                  <li className="catalog-item">
                    <Button
                      className="catalog-link"
                      href={href}
                      label={title}
                      iconName={icon}
                    />
                  </li>
                ))}
                <li className="catalog-item">
                  {" "}
                  <Button
                    className="catalog-link"
                    href="/courses"
                    label="Все курсы"
                    iconName="all"
                  ></Button>
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
