import {getTokens, camelCase} from '../utils'

const getSpacing = (layerName, stylesArtboard) => {
  const palette = {spacing: {}}
  const decorator = element => {
    const {name, absoluteBoundingBox} = element
    const tokens = {
      [camelCase(name)]: {value: `${absoluteBoundingBox.width}px`}
    }
    Object.assign(palette.spacing, tokens)
  }

  return getTokens(layerName, stylesArtboard, palette, decorator)
}

export default getSpacing
