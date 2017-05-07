import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react'; //eslint-disable-line no-unused-vars

export default ({ children }) => {
  return <MultiThemeProvider>
           {children}
         </MultiThemeProvider>;
};