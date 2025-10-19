import "swiper/css"
import "./Slider.scss"

import classNames from "classnames"
import SliderNavigation from "./components/SliderNavigation"

const defaultSliderParams = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
}

const Slider = (props) => {
  const {
    className,
    children = [],
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
    hasPagination = true,
  } = props

  return (
    <div
      className={classNames(className, "slider")}
      data-js-slider={JSON.stringify({
        sliderParams,
        navigationTargetElementId,
      })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
      {!navigationTargetElementId && (
        <SliderNavigation
          className="slider__navigation"
          hasPagination={hasPagination}
        />
      )}
    </div>
  )
}

export default Slider
