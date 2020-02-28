import React from 'react';
import { render } from '@testing-library/react';
import Input from '..';

describe('Input', () => {
  test('it works default', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with id and name attr', () => {
    const { container } = render(<Input id='id' name='name' />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with placeholder', () => {
    const { container } = render(<Input placeholder='Placeholder' />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with default value', () => {
    const { container } = render(<Input placeholder='Placeholder' defaultValue='Default value' />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with disabled attr', () => {
    const { container } = render(
      <Input placeholder='Placeholder' defaultValue='Default value' disabled />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with readonly attr', () => {
    const { container } = render(
      <Input placeholder='Placeholder' defaultValue='Default value' readonly />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
