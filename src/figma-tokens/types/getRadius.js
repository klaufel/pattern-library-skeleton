import {getTokens, camelCase} from '../utils'

const getRadius = (layerName, stylesArtboard) => {
  const palette = {radius: {}}
  const decorator = element => {
    const {name} = element
    const {cornerRadius} = element.children[0]
    const tokens = {
      [camelCase(name)]: {value: `${cornerRadius}px`}
    }
    Object.assign(palette.radius, tokens)
  }

  return getTokens(layerName, stylesArtboard, palette, decorator)
}

export default getRadius
