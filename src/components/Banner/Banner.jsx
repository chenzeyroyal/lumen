import "./Banner.scss"
import classNames from "classnames"

const Banner = (props) => {
  const {
    className,
    title,
    subtitle,
    tag,
    bannerType,
    description = [],
    children,
  } = props

  return (
    <div className={classNames(className, "banner")}>
      <div className="banner__body">
        <header className="banner__header">
          {bannerType && (
            <div className="banner__header-top">
              <h3 className="banner__type">{bannerType}</h3>
              <div className="banner__tag">{tag}</div>
            </div>
          )}

          <h1 className="banner__title">{title}</h1>
        </header>
        <div className="banner__description">
          <p className="banner__subtitle">{subtitle}</p>
          <ul>
            {description.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Banner
