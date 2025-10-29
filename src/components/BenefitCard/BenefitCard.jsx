import "./BenefitCard.scss"
import { Image } from "minista"

const BenefitCard = (props) => {
  const { title, subtitle, image } = props

  return (
    <div className="benefit-card">
      <div className="benefit-card__text">
        <h3 className="benefit-card__title">{title}</h3>
        <p className="benefit-card__subtitle">{subtitle}</p>
      </div>

      <img className="benefit-card__image" src={image} />
    </div>
  )
}

export default BenefitCard
