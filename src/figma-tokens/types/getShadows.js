import {camelCase} from '../utils'

const parseRGBA = color => {
  const {r, g, b, a} = color
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const genShadow = (color, offset, radius) => {
  const {x, y} = offset
  return `${x}px ${y}px ${radius}px 0 ${parseRGBA(color)}`
}

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
