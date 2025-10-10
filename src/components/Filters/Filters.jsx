import classNames from "classnames"
import Button from "../Button"
import "./Filters.scss"

const Filters = (props) => {
  const { className, items = [] } = props

  const rangeValues = {
    min: 6,
    max: 24,
  }

  return (
    <aside
      className={classNames(className, "filters")}
      data-js-modal=""
      data-js-filters=""
    >
      <div className="filters__header visible-mobile" data-js-hide-button="">
        <Button
          className="filters__close-button"
          label="Закрыть фильтры"
          extraAttrs={{ "data-js-close-button": "" }}
          isLabelHidden
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
            class="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
      </div>
      <div className="filters__subcategories">
        <h3 className="filters__subtitle">Направления</h3>
        <label className="filters__radio-button" name="subcategory-filters">
          <input
            type="radio"
            name="subcategory-filters"
            checked
            data-js-radio-button="all"
          />
          <span>Все программы</span>
        </label>

        {items.map(({ subCategories }) =>
          subCategories.map((subCat) => (
            <label className="filters__radio-button" name="subcategory-filters">
              <input
                type="radio"
                name="subcategory-filters"
                data-js-radio-button={subCat.id}
              />
              <span>{subCat.title}</span>
            </label>
          ))
        )}
      </div>
      <div className="filters__range">
        <header className="filters__range-header">
          <h3 className="filters__range-title">Длительность</h3>
          <p className="filters__range-subtitle">{`от ${rangeValues.min} до ${rangeValues.max} месяцев`}</p>
        </header>

        <div className="filters__range-body">
          <span>{rangeValues.min}</span>
          <input
            type="range"
            data-js-range-slider=""
            id="range-slider"
            className="filters__range-slider"
            min={rangeValues.min}
            max={rangeValues.max}
            value={rangeValues.max}
            step={1}
          />
          <span>{rangeValues.max}</span>
        </div>
      </div>
      <div
        className="filters__buttons visible-mobile"
        data-js-filter-buttons=""
      >
        <Button
          className="filters__user-button filters__user-button--cancel"
          label="Отменить фильтры"
          extraAttrs={{ "data-js-filter-button": "cancel" }}
        />
        <Button
          className="filters__user-button"
          label="Принять фильтры"
          extraAttrs={{ "data-js-filter-button": "submit" }}
          isAccent
        />
      </div>
    </aside>
  )
}

export default Filters
