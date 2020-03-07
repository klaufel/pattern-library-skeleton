import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../styles/theme';
import Label from '..';

describe('Label', () => {
  test('it works default', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Label>Default label</Label>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
