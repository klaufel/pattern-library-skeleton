import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import GlobalStyle from '../../../styles/GlobalStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Name = styled.span`
  font-size: 12px;
  display: block;
  margin-bottom: 8px;
  min-width: 80px;
`;

const Block = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  &:not(:last-of-type) {
    padding-bottom: 16px;
  }
`;

const Grid = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) => props.theme.colors.neutral.percent80};
  margin-bottom: 8px;
`;

const Spacing = ({ spaces }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      {Object.values(spaces).map((item, index) => {
        const spaceName = Object.keys(spaces);
        return (
          <Block key={index}>
            <Name>
              {spaceName[index]} / {item}
            </Name>
            <Grid size={item} />
          </Block>
        );
      })}
    </Wrapper>
  </ThemeProvider>
);

export default Spacing;
