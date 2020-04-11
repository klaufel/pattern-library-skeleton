import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 640px;
  margin: 40px auto;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radius.sm};
  box-shadow: ${props => props.theme.shadows.sm};
`
