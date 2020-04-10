import fs from 'fs'
import fetch from 'node-fetch'
import getColors from './types/getColors'
import getTypography from './types/getTypography'
import getSpacing from './types/getSpacing'
import getShadows from './types/getShadows'
import getBreakpoints from './types/getBreakpoints'
import getRadius from './types/getRadius'

const emojis = {
  color: '🎨',
  typography: '🖋 ',
  spacing: '📐',
  shadow: '🌚',
  breakpoint: '🍪',
  radius: '🌀'
}

const genFile = (name, tokens, outDir) => {
  fs.writeFile(
    `${outDir}/${name}.json`,
    JSON.stringify(tokens, null, 2),
    err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(
        `\x1b[32m ${emojis[name]} ${name.toUpperCase()} tokens created!\x1b[0m`
      )
      console.log('')
    }
  )
}

const execute = (apikey, id, outDir) => {
  console.log('\x1b[40m 👟 🚀  Connecting from mars... \x1b[0m')
  console.log('')
  const FETCH_URL = `https://api.figma.com/v1/files/${id}`
  const FETCH_DATA = {
    method: 'GET',
    headers: {
      'X-Figma-Token': apikey
    }
  }

  try {
    fetch(FETCH_URL, FETCH_DATA)
      .then(response => {
        console.log(' Connection with Figma is successful...')
        console.log('')
        console.log('----------------')
        console.log('')
        return response.json()
      })
      .then(response => {
        try {
          if (response.status) {
            console.log('')
            console.log('----------------')
            console.log('')
            console.log(
              `\x1b[31m ❌  An error has occurred: ${response.status} - ${response.err}`
            )
            console.log('')
          }
          return response

          // Do your JSON handling here
        } catch (error) {
          console.log(error)
          return error
        }
      })
      .then(styles => {
        if (styles.status !== 403 && styles.status !== 404) {
          const figmaTreeStructure = styles.document.children[0].children

          const tokensColors = getColors('Colors', figmaTreeStructure)
          const tokensSpacing = getSpacing('Spacings', figmaTreeStructure)
          const tokensTypography = getTypography(
            'Typography',
            figmaTreeStructure
          )
          const tokensShadows = getShadows('Shadows', figmaTreeStructure)
          const tokensBreakpoints = getBreakpoints(
            'Breakpoints',
            figmaTreeStructure
          )
          const tokensRadius = getRadius('Radius', figmaTreeStructure)

          genFile('color', tokensColors, outDir)
          genFile('spacing', tokensSpacing, outDir)
          genFile('typography', tokensTypography, outDir)
          genFile('shadow', tokensShadows, outDir)
          genFile('breakpoint', tokensBreakpoints, outDir)
          genFile('radius', tokensRadius, outDir)
        }
      })
      .catch(error => console.log(error))
  } catch (err) {
    console.log(err)
  }
}

export default execute
