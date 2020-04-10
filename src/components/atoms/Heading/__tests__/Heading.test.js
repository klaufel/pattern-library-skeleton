import React from 'react'
import 'jest-styled-components'
import {render} from '@testing-library/react'
import {ThemeProvider} from 'styled-components'
import theme from '../../../../styles/theme'
import Heading, {HEADINGS_TYPES, HEADINGS_SIZES} from '..'

const HeadingTypes = () =>
  Object.keys(HEADINGS_TYPES).map(type => (
    <Heading key={type} type={type}>
      Minions ipsum chasy baboiii bappleees
    </Heading>
  ))

const HeadingSizes = () =>
  Object.keys(HEADINGS_SIZES).map(size => (
    <Heading key={size} size={size}>
      Minions ipsum chasy baboiii bappleees
    </Heading>
  ))

describe('Heading', () => {
  test('it works default', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Heading>Minions ipsum chasy baboiii bappleees</Heading>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with all sizes variations', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <HeadingSizes />
      </ThemeProvider>
    )
    expect(container).toMatchSnapshot()
  })

  test('it works with all types variations', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <HeadingTypes />
      </ThemeProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
