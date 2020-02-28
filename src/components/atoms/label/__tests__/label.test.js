import React from 'react';
import { render } from '@testing-library/react';
import Label from '..';

describe('Label', () => {
  test('it works default', () => {
    const { container } = render(<Label text='Default label' name='default-label' />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
