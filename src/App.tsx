import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Login from './pages/login/Login';
import Wallet from './pages/Wallet';
import GlobalStyles from './styles/globalStyles';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [isDark, setIsDark] = useState(false);

  const renderDarkMode = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  return (
    <ThemeProvider theme={ isDark ? dark : light }>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={ <Login renderDarkMode={ renderDarkMode } isDark={ isDark } /> }
        />
        <Route path="/carteira" element={ <Wallet /> } />
      </Routes>
    </ThemeProvider>

  );
}

export default App;
