import React from 'react'
import PropTypes from 'prop-types'
import {Wrapper} from './Heading.styles'

export const HEADINGS_TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  span: 'span'
}

export const HEADINGS_SIZES = {
  small: 'small',
  normal: 'normal',
  big: 'big'
}

const Heading = ({
  type = HEADINGS_TYPES.h1,
  size = HEADINGS_SIZES.normal,
  children,
  ...props
}) => (
  <Wrapper as={type} size={size} {...props}>
    {children}
  </Wrapper>
)

Heading.displayName = 'Heading'

Heading.propTypes = {
  /** HTML tag to render */
  type: PropTypes.oneOf(Object.keys(HEADINGS_TYPES)),
  /** Size of heading */
  size: PropTypes.oneOf(Object.keys(HEADINGS_SIZES)),
  /** Content to be included in the heading */
  children: PropTypes.node.isRequired
}

export default Heading
