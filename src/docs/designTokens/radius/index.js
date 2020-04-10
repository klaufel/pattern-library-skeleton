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
  width: 100px;
  height: 100px;
  background: ${props => props.theme.colors.neutral.percent20};
  margin-bottom: 16px;
  border-radius: ${props => props.borderRadius};
`

const Radius = ({radius}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      {Object.values(radius).map((item, index) => {
        const shadowName = Object.keys(radius)
        return (
          <Block key={index}>
            <Name>{shadowName[index]}</Name>
            <Grid borderRadius={item} />
          </Block>
        )
      })}
    </Wrapper>
  </ThemeProvider>
)

Radius.propTypes = {
  radius: PropTypes.object
}

export default Radius
