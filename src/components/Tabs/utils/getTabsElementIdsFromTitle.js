import getIdFromTitle from "@/utils/getIdFromTitle"

const getTabsElementIdsFromTitle = (title) => {
  const titleFormatted = getIdFromTitle(title)

  return {
    buttonId: `${titleFormatted}-tab`,
    contenId: `${titleFormatted}-tabpanel`,
  }
}

export default getTabsElementIdsFromTitle
