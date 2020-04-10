import {camelCase} from '../utils'

const getBreakpoints = (layerName, stylesArtboard) => {
  const palette = {breakpoint: {}}
  const paletteArtboard = stylesArtboard.filter(item => {
    return item.name === layerName
  })[0].children

  paletteArtboard.map(item => {
    if (item.type === 'COMPONENT') {
      const {name, absoluteBoundingBox} = item
      const gridObj = {
        [camelCase(name)]: {value: `${absoluteBoundingBox.width}px`}
      }
      Object.assign(palette.breakpoint, gridObj)
    }
    return null
  })
  return palette
}

export default getBreakpoints
