import classNames from "classnames"
import "./Logo.scss"
import { getDynamicURL } from "@/utils/getDynamicURL"

const Logo = (props) => {
  const { className, mode = "dark", loading = "lazy" } = props

  const image = mode === "dark" ? getDynamicURL("/logo_black.png") : getDynamicURL("/logo_white.png")
  return (
    <a className={classNames(className, "logo")} href={getDynamicURL('/')}>
      <img
        className="logo__image"
        src={image}
        alt=""
        width={150}
        height={60}
        loading={loading}
      />
    </a>
  )
}

export default Logo
