import styled, {css} from 'styled-components'

export const Wrapper = styled.h1`
  font-size: ${props => props.theme.typography.heading.normal.fontSize};
  line-height: ${props => props.theme.typography.heading.normal.lineHeight};
  font-weight: ${props => props.theme.typography.heading.normal.fontWeight};
  margin: 0 0 ${props => props.theme.spacing.md};

  ${props =>
    props.size === 'big' &&
    css`
      font-size: ${props => props.theme.typography.heading.big.fontSize};
      line-height: ${props => props.theme.typography.heading.big.lineHeight};
      font-weight: ${props => props.theme.typography.heading.big.fontWeight};
    `}

  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${props => props.theme.typography.heading.small.fontSize};
      line-height: ${props => props.theme.typography.heading.small.lineHeight};
      font-weight: ${props => props.theme.typography.heading.small.fontWeight};
    `}
`
