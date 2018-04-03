import React from 'react';
import { ThemeProvider } from 'react-jss';

const withTheme = Component => (
  () => (
    <ThemeProvider theme={null}>
      <Component />
    </ThemeProvider>
  )
);

export default withTheme;
