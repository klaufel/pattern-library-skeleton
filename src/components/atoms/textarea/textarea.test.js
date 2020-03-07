import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Textarea from '.';

describe('Textarea', () => {
  test('it works default', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Textarea status='success' />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with status success', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Textarea status='success' />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('it works with status error', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Textarea status='error' />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
