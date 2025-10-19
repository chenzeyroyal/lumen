import "./Rating.scss"

import IMAGE_STARSFILLED from "@/assets/images/rating/stars_filled.svg"
import IMAGE_STARSUNFILLED from "@/assets/images/rating/stars_unfilled.svg"

const Rating = (props) => {
  const { value = 5, label } = props

  const ariaLabel = `Рейтинг: ${value} звезд`

  return (
    <div
      className="rating"
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        "--ratingValue": value,
      }}
    >
      <div className="rating__stars">
        <img
          className="rating__stars-unfilled"
          src={IMAGE_STARSUNFILLED}
          width={98}
          height={18}
          alt=""
        />
        <img
          className="rating__stars-filled"
          src={IMAGE_STARSFILLED}
          width={98}
          height={18}
          alt=""
        />
      </div>

      {label && <div className="rating__label">{label}</div>}
    </div>
  )
}

export default Rating
