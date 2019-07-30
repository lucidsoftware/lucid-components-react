import React from 'react';
import './App.css';

import { ThemeProvider } from 'emotion-theming'
import theme from './theme/theme';
import Card from './components/card/card';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Card>Hello</Card>
      </ThemeProvider>
    </div>
  );
}

export default App;
