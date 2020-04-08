import React from 'react'
import 'jest-styled-components'
import {render} from '@testing-library/react'
import {ThemeProvider} from 'styled-components'
import theme from '../../../../styles/theme'
import Select from '..'

describe('Select', () => {
  test('it works default', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Select />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with options', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </Select>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with status success', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Select status="success">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </Select>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works with status error', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Select status="error">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </Select>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
