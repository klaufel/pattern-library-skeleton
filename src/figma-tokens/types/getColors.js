import {camelCase, rgbaGenObject, fullColorHex} from '../utils'

const getColors = (layerName, stylesArtboard) => {
  const palette = {color: {}}
  const paletteArtboard = stylesArtboard.filter(item => {
    return item.name === layerName
  })[0].children

  paletteArtboard.map(item => {
    if (item.type === 'COMPONENT') {
      const {r, g, b, a} = item.children[0].fills[0].color
      const colorRGBA = rgbaGenObject(r, g, b, a)
      const colorObj = {
        [camelCase(item.name)]: {
          value: `${fullColorHex(colorRGBA.r, colorRGBA.g, colorRGBA.b)}`
        }
      }

      Object.assign(palette.color, colorObj)
    }
  })
  return palette
}

export default getColors
