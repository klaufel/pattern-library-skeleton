import React from 'react';
import { render } from '@testing-library/react';
import Icon, { ICON_NAMES, ICON_SIZES } from '..';

const IconNames = () => ICON_NAMES.map(name => <Icon key={name} name={name} />);

const IconSizes = () =>
  Object.keys(ICON_SIZES).map(size => <Icon key={size} name={ICON_NAMES[0]} size={size} />);

describe('Icon', () => {
  test('it works with all icons names', () => {
    const { container } = render(<IconNames />);
    expect(container).toMatchSnapshot();
  });

  test('it works with all icons sizes', () => {
    const { container } = render(<IconSizes />);
    expect(container).toMatchSnapshot();
  });
});
