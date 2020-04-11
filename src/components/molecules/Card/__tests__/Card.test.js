import React from 'react'
import 'jest-styled-components'
import {render} from '@testing-library/react'
import {ThemeProvider} from 'styled-components'
import theme from '../../../../styles/theme'
import Card from '..'

describe('Card', () => {
  test('it works default', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Card>
          <p>Lorem ipsum dolor</p>
        </Card>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with title', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Card title="Card title">
          <p>Lorem ipsum dolor</p>
        </Card>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
