import React from 'react'
import 'jest-styled-components'
import {render} from '@testing-library/react'
import {ThemeProvider} from 'styled-components'
import theme from '../../../../styles/theme'
import Button from '..'

describe('Button', () => {
  test('it works default', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Button>Default button</Button>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works disabled', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Button disabled>Default button</Button>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with secondary variation', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Button secondary>Default button</Button>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with secondary and disabled variation', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Button secondary disabled>
          Default button
        </Button>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with ghost variation', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Button ghost>Default button</Button>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with ghost and disabled variation', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Button ghost disabled>
          Default button
        </Button>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
