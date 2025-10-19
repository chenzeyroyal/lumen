import "./Section.scss"
import classNames from "classnames"

const Section = (props) => {
  const { className, title, subtitle, actions, children, isHeaderHidden } =
    props

  return (
    <section className={classNames(className, "section")}>
      {title && (
        <header
          className={classNames("section__header", {
            ["visually-hidden"]: isHeaderHidden,
          })}
        >
          <div className="section__description">
            <h2 className="section__title">{title}</h2>
            <p className="section__subtitle">{subtitle}</p>
          </div>
          {actions && (
            <div className={classNames("section__actions")}>{actions}</div>
          )}
        </header>
      )}

      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
