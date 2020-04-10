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
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33%;
  margin-bottom: 16px;
`

const Grid = styled.div`
  width: ${props => (props.rectangle ? '160px' : '100px')};
  height: 100px;
  box-shadow: ${props => props.shadow};
  background: ${props => props.theme.colors.neutral.percent00};
  margin-bottom: 16px;
  border-radius: ${props => (props.rounded ? '50%' : '8px')};
`

const Shadows = ({shadows, rectangle, rounded}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      {Object.values(shadows).map((item, index) => {
        const shadowName = Object.keys(shadows)
        return (
          <Block key={index}>
            <Name>{shadowName[index]}</Name>
            <Grid shadow={item} rounded={rounded} rectangle={rectangle} />
          </Block>
        )
      })}
    </Wrapper>
  </ThemeProvider>
)

Shadows.propTypes = {
  shadows: PropTypes.object,
  rectangle: PropTypes.bool,
  rounded: PropTypes.bool
}

export default Shadows
