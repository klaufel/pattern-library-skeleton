import {getTokens, camelCase, rgbaGenObject, fullColorHex} from '../utils'

const getColors = (layerName, stylesArtboard) => {
  const palette = {color: {}}
  const decorator = element => {
    const {name} = element
    const {r, g, b, a} = element.children[0].fills[0].color
    const colorRGBA = rgbaGenObject(r, g, b, a)
    const tokens = {
      [camelCase(name)]: {
        value: `${fullColorHex(colorRGBA.r, colorRGBA.g, colorRGBA.b)}`
      }
    }
    Object.assign(palette.color, tokens)
  }

  return getTokens(layerName, stylesArtboard, palette, decorator)
}

export default getColors
