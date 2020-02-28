import React from 'react';
import { render } from '@testing-library/react';
import FormField from '..';

describe('FormField', () => {
  test('it works default', () => {
    const { container } = render(<FormField label='Default label' name='FormField' />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with placeholder', () => {
    const { container } = render(
      <FormField label='Default label' name='input' placeholder='Placeholder' />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with default value', () => {
    const { container } = render(
      <FormField
        label='Default label'
        name='input'
        placeholder='Placeholder'
        defaultValue='Default value'
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with disabled attr', () => {
    const { container } = render(
      <FormField
        label='Default label'
        name='input'
        placeholder='Placeholder'
        defaultValue='Default value'
        disabled
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with readonly attr', () => {
    const { container } = render(
      <FormField
        label='Default label'
        name='input'
        placeholder='Placeholder'
        value='Default value'
        readonly
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
