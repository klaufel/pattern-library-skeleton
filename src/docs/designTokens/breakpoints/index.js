import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/GlobalStyle'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Name = styled.span`
  font-size: 12px;
  display: block;
  margin-bottom: 8px;
  min-width: 80px;
`

const Block = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:not(:last-of-type) {
    padding-bottom: 16px;
  }
`

const Breakpoint = styled.div`
  width: ${props => props.size};
  height: 24px;
  background: ${props => props.theme.colors.neutral.percent20};
  margin-bottom: 8px;
`

const Breakpoints = ({breakpoints}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      {Object.values(breakpoints).map((item, index) => {
        const spaceName = Object.keys(breakpoints)
        return (
          <Block key={index}>
            <Name>
              {spaceName[index]} / {item}
            </Name>
            <Breakpoint size={item} />
          </Block>
        )
      })}
    </Wrapper>
  </ThemeProvider>
)

Breakpoints.propTypes = {
  breakpoints: PropTypes.object
}

export default Breakpoints
