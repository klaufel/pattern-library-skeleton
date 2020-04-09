import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/GlobalStyle'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`

const Background = styled.div`
  width: 158px;
  height: 60px;
  background: ${props => props.color};
  border: 1px solid #eee;
  display: flex;
  padding: 8px;
  align-items: flex-end;
  border-radius: 4px;
  margin-bottom: 8px;
`

const Info = styled.span`
  font-size: 12px;
`

const Colors = ({colors}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      {Object.values(colors).map((item, index) => {
        const colorNames = Object.keys(colors)
        return (
          <Block key={index}>
            <Background key={item} color={item} />
            <Info>
              {colorNames[index]} / {item}
            </Info>
          </Block>
        )
      })}
    </Wrapper>
  </ThemeProvider>
)

Colors.propTypes = {
  colors: PropTypes.object
}

export default Colors
