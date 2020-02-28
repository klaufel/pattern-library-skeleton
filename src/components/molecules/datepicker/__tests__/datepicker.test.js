import React from 'react';
import { render } from '@testing-library/react';
import Datepicker from '..';

describe('Datepicker', () => {
  test('it works with a year and month and placeholder', () => {
    const { container } = render(
      <Datepicker
        label='Select a date'
        placeholder='dd/mm/yyyy'
        name='datepicker'
        year={1970}
        month={6}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with a year and month', () => {
    const { container } = render(
      <Datepicker label='Select a date' name='datepicker' year={1970} month={6} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with a default date', () => {
    const { container } = render(
      <Datepicker label='Select a date' name='datepicker' date='01/10/1994' />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with a default date and disabled attr', () => {
    const { container } = render(
      <Datepicker label='Select a date' name='datepicker' date='01/10/1994' disabled />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with a default date and year/month selected', () => {
    const { container } = render(
      <Datepicker label='Select a date' name='datepicker' date='31/01/2020' year={2020} month={2} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
