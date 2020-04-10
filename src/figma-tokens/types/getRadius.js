import {camelCase} from '../utils'

const getShadows = (layerName, stylesArtboard) => {
  const palette = {radius: {}}
  const paletteArtboard = stylesArtboard.filter(item => {
    return item.name === layerName
  })[0].children

  paletteArtboard.map(item => {
    if (item.type === 'COMPONENT') {
      const {name} = item
      const {cornerRadius} = item.children[0]
      const gridObj = {
        [camelCase(name)]: {value: `${cornerRadius}px`}
      }
      Object.assign(palette.radius, gridObj)
    }
  })
  return palette
}

export default getShadows
