import React from 'react';
import { render } from '@testing-library/react';
import Button from '..';

describe('Button', () => {
  test('it works default', () => {
    const { container } = render(<Button>Default button</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works disabled', () => {
    const { container } = render(<Button disabled>Default button</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with onClick event', () => {
    const { container } = render(
      <Button onClick={() => console.log('onClick')}>Default button</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
