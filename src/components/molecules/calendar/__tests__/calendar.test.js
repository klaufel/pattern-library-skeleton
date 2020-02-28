import React from 'react';
import { render } from '@testing-library/react';
import Calendar from '..';

describe('Calendar', () => {
  test('it works with a year and month', () => {
    const { container } = render(<Calendar year={1970} month={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with a default date', () => {
    const { container } = render(<Calendar date='01/10/1994' />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with a default date and year/month selected', () => {
    const { container } = render(<Calendar date='31/01/2020' year={2020} month={2} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
