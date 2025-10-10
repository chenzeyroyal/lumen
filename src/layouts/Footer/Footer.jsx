import "./Footer.scss"
import courseGroups from "@/utils/courseGroups"
import menuItems from "../Header/utlis/menuItems"
import featuresGroups from "@/sections/Features/featuresGroups"
import Logo from "@/components/Logo"

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__column">
        <h3 className="footer__column-title">Направления</h3>

        <ul className="footer__category-list footer__list">
          {courseGroups.map(({ title, href }, index) => (
            <li className="footer__list-item" key={index}>
              <a className="footer__link" href={href}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-title">Курсы</h3>

        <ul className="footer__program-list footer__list">
          {featuresGroups.map((group) =>
            group.items.map(({ title, href }) => (
              <li className="footer__list-item">
                <a className="footer__link" href={href}>
                  {title}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-title">о lumen</h3>
        <ul className="footer__menu-list footer__list">
          {menuItems.map(({ title, href }, index) => (
            <li className="footer__list-item" key={index}>
              <a className="footer__link" href={href}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
