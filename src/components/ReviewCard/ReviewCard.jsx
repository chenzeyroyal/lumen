import "./ReviewCard.scss"
import Rating from "../Rating"
import { Image } from "minista"
const ReviewCard = (props) => {
  const { username, avatar, course, rate, review } = props

  return (
    <div className="review-card">
      <Image className="review-card__avatar" src={avatar} alt="Фото пользователя" />

      <div className="review-card__body">
        <header className="review-card__header">
          <span className="review-card__username">{username}</span>
          <a href={course.href}>{course.title}</a>
        </header>
        <Rating value={rate} />
        <p>{review}</p>
      </div>
    </div>
  )
}

export default ReviewCard
