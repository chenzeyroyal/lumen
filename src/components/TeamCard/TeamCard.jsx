import "./TeamCard.scss"
import classNames from "classnames"

const TeamCard = (props) => {
  const { className, title, subtitle, image } = props

  return (
    <div className={classNames(className, "team-card")}>
      <img className="team-card__image" src={image} alt="Фото сотрудника" />
      <div className="team-card__description">
        <h3 className="team-card__title">{title}</h3>
        <p className="team-card__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default TeamCard
