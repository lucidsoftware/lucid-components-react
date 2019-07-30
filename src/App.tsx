import React from 'react';
import './App.css';

import { ThemeProvider } from 'emotion-theming'
import theme from './theme/theme';


const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </div>
  );
}

export default App;
