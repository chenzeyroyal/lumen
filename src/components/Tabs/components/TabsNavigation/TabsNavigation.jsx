import getIdFromTitle from "@/utils/getIdFromTitle"
import getTabsElementIdsFromTitle from "../../utils/getTabsElementIdsFromTitle"
import "./TabsNavigation.scss"
import classNames from "classnames"

const TabsNavigation = (props) => {
  const { className, id, title, items = [] } = props

  const titleFormatted = getIdFromTitle(title)
  const titleId = `${titleFormatted}-title`

  return (
    <div
      className={classNames(className, "tabs-navigation")}
      id={id}
      role="tablist"
      aria-labelledby={titleId}
      data-js-tabs-navigation=""
    >
      <h3 className="visualliy-hidden" id={titleId}></h3>
      {items.map((item, index) => {
        const { buttonId, contentId } = getTabsElementIdsFromTitle(item.title)

        return (
          <div
            className={classNames("tabs-navigation__button", {
              "is-active": item.isActive,
            })}
            role="tab"
            id={buttonId}
            aria-controls={contentId}
            aria-selected={item.isActive}
            tabIndex={item.isActive ? 0 : -1}
            data-js-tabs-button=""
            key={index}
          >
            <span className="tabs-navigation__button-text">{item.title}</span>
          </div>
        )
      })}
    </div>
  )
}
export default TabsNavigation
