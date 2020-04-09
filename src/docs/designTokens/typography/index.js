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
  font-size: ${props => (props.fontSize ? props.fontSize : '12px')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'auto')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
`

const Name = styled.span`
  font-size: 12px;
  display: block;
  margin-bottom: 8px;
  min-width: 80px;
`

const Block = styled.div`
  display: flex;
  align-items: flex-start;
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
              fontSize={item.fontSize}
              lineHeight={item.lineHeight}
              fontWeight={item.fontWeight}
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
