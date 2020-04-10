import {camelCase, genShadow} from '../utils'

const getShadows = (layerName, stylesArtboard) => {
  const palette = {shadow: {}}
  const paletteArtboard = stylesArtboard.filter(item => {
    return item.name === layerName
  })[0].children

  paletteArtboard.map(item => {
    if (item.type === 'COMPONENT') {
      const {name} = item
      const {color, offset, radius} = item.effects[0]
      const gridObj = {
        [camelCase(name)]: {value: genShadow(color, offset, radius)}
      }
      Object.assign(palette.shadow, gridObj)
    }
  })
  return palette
}

export default getShadows
