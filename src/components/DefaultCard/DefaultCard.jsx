import "./DefaultCard.scss"

import Button from "../Button"
import classNames from "classnames"

const DefaultCard = (props) => {
  const { className, title, subtitle, button } = props

  return (
    <div className={classNames(className, "default-card")}>
      <div className="default-card__description">
        <h3 className="default-card__title">{title}</h3>
        <p className="default-card__subtitle">{subtitle}</p>
      </div>
      <div className="default-card__actions">
        <Button
          className="default-card__button"
          label={button.label}
          href={button.href}
          isAccent
        />
      </div>
    </div>
  )
}

export default DefaultCard
