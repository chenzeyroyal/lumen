import "./CourseCard.scss"
import classNames from "classnames"
import { Image } from "minista"

const CourseCard = (props) => {
  const { className, title, description, duration, href, image } = props

  return (
    <a className={classNames(className, "course-card")} href={href}>
      <div className="course-card__info">
        <p className="course-card__description">{description}</p>
        <p className="course-card__duration">{duration}</p>
        <h3 className="course-card__title">{title}</h3>
      </div>
      <Image className="course-card__image" src={image} alt=''/>
    </a>
  )
}

export default CourseCard
