import classNames from "classnames"
import "./LinkCard.scss"
import Button from "../Button"

const LinkCard = (props) => {
  const {
    className,
    title,
    subtitle,
    description,
    image,
    href,
    mode = "link",
  } = props

  return (
    <a
      className={classNames(className, `link-card link-card--${mode}`)}
      href={href}
    >
      <div className="link-card__body">
        {mode === "product" && (
          <div className="link-card__description">
            <span>{description}</span>
          </div>
        )}

        <header className="link-card__header">
          <h3 className="link-card__title">{title}</h3>
        </header>
        <footer className="link-card__footer">
          {mode === "link" && (
            <Button className="link-card__button" isAccent isLabelHidden>
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
                class="lucide lucide-chevron-right-icon lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          )}
          {mode === "product" && (
            <p className="link-card__subtitle">{subtitle}</p>
          )}
        </footer>
      </div>
      <img className="link-card__image" src={image} />
    </a>
  )
}

export default LinkCard
