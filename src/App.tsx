import React, {FC,ReactElement} from 'react';
//FC =functional components {its an interface}
import {ThemeProvider, CssBaseline} from '@mui/material'
import {customTheme} from './theme/custom-theme'
import {Dashboard} from './pages/dashboard/dashboard-pages'

const App:FC = ():ReactElement => {
  return (
    <ThemeProvider theme = {customTheme}>
      <CssBaseline/>
      <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
