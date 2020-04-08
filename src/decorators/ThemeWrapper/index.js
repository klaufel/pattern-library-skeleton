import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../../styles/theme'
import GlobalStyle from '../../styles/GlobalStyle'

const ThemeWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
)

export default ThemeWrapper
