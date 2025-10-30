import "./LinkCard.scss"

import classNames from "classnames"
import Icon from "../Icon"
import { Image } from "minista"

const LinkCard = (props) => {
  const { className, title, image, href } = props

  return (
    <a className={classNames(className, "link-card")} href={href}>
      <div className="link-card__body">
        <header className="link-card__header">
          <h3 className="link-card__title">{title}</h3>
        </header>
        <footer className="link-card__footer">
          <div className="link-card__icon">
            <Icon name="chevron-right" />
          </div>
        </footer>
      </div>
      {image && <Image className="link-card__image" src={image} alt="" />}
    </a>
  )
}

export default LinkCard
