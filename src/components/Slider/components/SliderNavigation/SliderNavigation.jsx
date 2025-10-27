import classNames from "classnames"
import "./SliderNavigation.scss"
import Button from "@/components/Button"

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    hasButtons = true,
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
      {hasButtons && (
        <Button
          className="slider-navigation__arrow-button slider-navigation__arrow-button--previous "
          label="Previous slide"
          iconName="arrow-left"
          isLabelHidden
          isAccent={isAccent}
          mode={mode}
          extraAttrs={{ "data-js-slider-previous-button": "" }}
        />
      )}

      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}

      {hasButtons && (
        <Button
          className="slider-navigation__arrow-button slider-navigation__arrow-button--next "
          label="Next slide"
          iconName="arrow-right"
          isLabelHidden
          isAccent={isAccent}
          mode={mode}
          extraAttrs={{ "data-js-slider-next-button": "" }}
        />
      )}
    </div>
  )
}

export default SliderNavigation
