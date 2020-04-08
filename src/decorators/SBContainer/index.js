import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 16px;
`

const SBContainer = storyFn => <Container>{storyFn()}</Container>

export default SBContainer
