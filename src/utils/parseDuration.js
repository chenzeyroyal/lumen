const parseDuration = (durationString) => {
  const match = durationString.match(/(\d+)/)
  return match ? parseInt(match[1]) : 0
}

export default parseDuration
