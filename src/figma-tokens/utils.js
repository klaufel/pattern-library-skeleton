export const filterArtboard = (layerName, stylesArtboard) =>
  stylesArtboard.filter(item => item.name === layerName)[0].children

export const filterElements = (layerName, stylesArtboard) =>
  filterArtboard(layerName, stylesArtboard).filter(
    item => item.type === 'COMPONENT'
  )

export const getTokens = (layerName, stylesArtboard, palette, decorator) => {
  const elements = filterElements(layerName, stylesArtboard)
  elements.map(element => decorator(element))
  return palette
}

export const camelCase = string => {
  const stringUpdate = string
    .toLowerCase()
    .replace(/(?:(^.)|([-_\s]+.))/g, match =>
      match.charAt(match.length - 1).toUpperCase()
    )
  return stringUpdate.charAt(0).toLowerCase() + stringUpdate.substring(1)
}

export const trim = str => str.replace(/^\s+|\s+$/gm, '')

export const getColor = color => Math.round(color * 255)

export const rgbaGen = (r, g, b, a) =>
  `rgba(${getColor(r)}, ${getColor(g)}, ${getColor(b)}, ${a})`

export const rgbaGenObject = (r, g, b, a) => {
  return {r: getColor(r), g: getColor(g), b: getColor(b), a: a}
}

export const rgbGen = (r, g, b) => {
  const getColor = color => Math.round(color * 255)
  return `rgba(${getColor(r)}, ${getColor(g)}, ${getColor(b)})`
}

export const rgbToHex = rgb => {
  const hex = Number(rgb).toString(16)
  return hex.length < 2 ? `0${hex}` : hex
}

export const fullColorHex = (r, g, b) => {
  const red = rgbToHex(r)
  const green = rgbToHex(g)
  const blue = rgbToHex(b)
  return `#${red + green + blue}`
}

export const parseRGBA = color => {
  const {r, g, b, a} = color
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export const genShadow = (color, offset, radius) => {
  const {x, y} = offset
  return `${x}px ${y}px ${radius}px ${parseRGBA(color)}`
}
