import classNames from "classnames"
import "./SliderNavigation.scss"
import Button from "@/components/Button"

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    /**
     * '' (default) | 'circle'
     */
    mode = "",
    isAccent = "",
  } = props

  return (
    <div
      className={classNames(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous "
        label="Previous slide"
        isLabelHidden
        isAccent={isAccent}
        mode={mode}
        extraAttrs={{ "data-js-slider-previous-button": "" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="slider-nagivation__button-icon"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </Button>

      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}

      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next "
        label="Next slide"
        isLabelHidden
        isAccent={isAccent}
        mode={mode}
        extraAttrs={{ "data-js-slider-next-button": "" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="slider-navigation__button-icon"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Button>
    </div>
  )
}

export default SliderNavigation
