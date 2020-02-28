import React from 'react';
import { render } from '@testing-library/react';
import Popover from '..';

describe('Popover', () => {
  test('it works default', () => {
    const { container } = render(
      <Popover>
        <div>...children</div>
      </Popover>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with is open', () => {
    const { container } = render(
      <Popover isOpen>
        <div>...children</div>
      </Popover>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with with close on click outisde', () => {
    const { container } = render(
      <Popover isOpen closeOutside>
        <div>...children</div>
      </Popover>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
