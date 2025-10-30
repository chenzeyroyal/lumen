import classNames from "classnames"
import "./Logo.scss"

const Logo = (props) => {
  const { className, loading = 'lazy' } = props

  return (
    <a className={classNames(className, "logo")} href="/">
      <img
        className="logo__image"
        src="/lumen/logo.png"
        alt=""
        width={150}
        height={60}
        loading={loading}
      />
    </a>
  )
}

export default Logo
