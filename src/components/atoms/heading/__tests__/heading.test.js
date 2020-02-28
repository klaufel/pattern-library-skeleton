import React from 'react';
import { render } from '@testing-library/react';
import Heading, { HEADINGS_TYPES, HEADINGS_SIZES } from '..';

const HeadingTypes = () =>
  Object.keys(HEADINGS_TYPES).map(type => (
    <Heading key={type} type={type}>
      Lorem ipsum dolor sit amet
    </Heading>
  ));

const HeadingSizes = () =>
  Object.keys(HEADINGS_SIZES).map(size => (
    <Heading key={size} size={size}>
      Lorem ipsum dolor sit amet
    </Heading>
  ));

describe('Heading', () => {
  test('it works default', () => {
    const { container } = render(<Heading>Lorem ipsum dolor sit amet</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with all sizes variations', () => {
    const { container } = render(<HeadingSizes />);
    expect(container).toMatchSnapshot();
  });

  test('it works with all types variations', () => {
    const { container } = render(<HeadingTypes />);
    expect(container).toMatchSnapshot();
  });
});
