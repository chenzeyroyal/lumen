import "./Rating.scss"

import starsUnfilledImg from "/src/assets/images/rating/stars_unfilled.svg"
import starsFilledImg from "/src/assets/images/rating/stars_filled.svg"

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
        <img className="rating__stars-unfilled" src={starsUnfilledImg} />
        <img className="rating__stars-filled" src={starsFilledImg} />
      </div>

      {label && <div className="rating__label">{label}</div>}
    </div>
  )
}

export default Rating
