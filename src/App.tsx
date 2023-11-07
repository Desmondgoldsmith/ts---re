import React, {FC,ReactElement} from 'react';
//FC =functional components {its an interface}
import {ThemeProvider, CssBaseline} from '@mui/material'
import {customTheme} from './theme/custom-theme'
const App:FC = ():ReactElement => {
  return (
    <ThemeProvider theme = {customTheme}>
      <CssBaseline/>
      <div className="App">
     <h1>Hello World</h1>   
    </div>
    </ThemeProvider>
  );
}

export default App;
