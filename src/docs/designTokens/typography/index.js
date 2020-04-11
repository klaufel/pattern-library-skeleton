import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../../../styles/theme'
import GlobalStyle from '../../../styles/GlobalStyle'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Text = styled.p`
  font-size: ${props => (props.size ? props.size : '12px')};
  line-height: ${props => (props.line ? props.line : 'auto')};
  font-weight: ${props => (props.weight ? props.weight : '400')};
  margin-bottom: 0;
`

const Name = styled.span`
  font-size: 12px;
  display: block;
  min-width: 80px;
`

const Block = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:not(:last-of-type) {
    padding-bottom: 32px;
  }
`

const mockText = 'Minions ipsum chasy baboiii bappleees'

const Typography = ({typos}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      {Object.values(typos).map((item, index) => {
        const typoNames = Object.keys(typos)
        return (
          <Block key={index}>
            <Name>{typoNames[index]}</Name>
            <Text
              size={item.fontSize}
              line={item.lineHeight}
              weight={item.fontWeight}
            >
              {mockText}
            </Text>
          </Block>
        )
      })}
    </Wrapper>
  </ThemeProvider>
)

Typography.propTypes = {
  typos: PropTypes.object
}

export default Typography
