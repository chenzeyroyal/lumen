import "./SliderCard.scss"
import { Image } from "minista"

import Button from "../Button"
import classNames from "classnames"

const SliderCard = (props) => {
  const { className, title, subtitle, button, image } = props

  return (
    <div className={classNames(className, "slider-card")}>
      <div className="slider-card__body">
        <div className="slider-card__description">
          <h3 className="slider-card__title">{title}</h3>
          <p className="slider-card__subtitle">{subtitle}</p>
        </div>
        <div className="slider-card__actions">
          <Button
            className="slider-card__button"
            label={button.label}
            href={button.href}
            isAccent
          />
        </div>
      </div>
      <div className="slider-card__image-container">
        <Image className="slider-card__image" src={image} width={200} height={100} />
      </div>
    </div>
  )
}

export default SliderCard
