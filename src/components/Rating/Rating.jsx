import "./Rating.scss"

import { Image } from "minista"

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
        <Image
          className="rating__stars-unfilled"
          src="src/assets/images/rating/stars_unfilled.svg"
        />
        <Image
          className="rating__stars-filled"
          src="src/assets/images/rating/stars_filled.svg"
        />
      </div>

      {label && <div className="rating__label">{label}</div>}
    </div>
  )
}

export default Rating
