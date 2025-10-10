import "./CourseCard.scss"
import classNames from "classnames"

const CourseCard = (props) => {
  const { className, title, subTitle, description, duration, href, image } =
    props

  return (
    <a className={classNames(className, "course-card")} href={href}>
      <div className="course-card__body">
        <header className="course-card__header">
          <p className="course-card__subtitle">{subTitle}</p>
        </header>
        <footer className="course-card__footer">
          <h3 className="course-card__title">{title}</h3>
          <p className="course-card__duration">{duration}</p>
        </footer>
        <p className="course-card__description">{description}</p>
      </div>
      <img className="course-card__image" src={image} />
    </a>
  )
}

export default CourseCard
