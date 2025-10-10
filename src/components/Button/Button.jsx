import "./Button.scss"

import classNames from "classnames"

const Button = (props) => {
  const {
    className,
    label,
    type = "button",
    href,
    iconPos = "left",
    isLabelHidden = false,
    isAccent = false,
    mode = "",
    extraAttrs,
    children,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href }
  const btnProps = { type }
  const specificProps = isLink ? linkProps : btnProps
  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={classNames(
        className,
        "button",
        { [`button--${mode}`]: mode },
        isAccent && "button--accent"
      )}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPos === "left" && children}
      {!isLabelHidden && <span>{label}</span>}
      {iconPos === "right" && children}
    </Component>
  )
}

export default Button
