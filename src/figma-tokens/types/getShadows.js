import {getTokens, camelCase, genShadow} from '../utils'

const getShadows = (layerName, stylesArtboard) => {
  const palette = {shadow: {}}
  const decorator = element => {
    const {name} = element
    const {color, offset, radius} = element.effects[0]
    const tokens = {
      [camelCase(name)]: {value: genShadow(color, offset, radius)}
    }
    Object.assign(palette.shadow, tokens)
  }

  return getTokens(layerName, stylesArtboard, palette, decorator)
}

export default getShadows
