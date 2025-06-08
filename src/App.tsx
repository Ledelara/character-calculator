import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './components/StyledComponents/globalStyle';
import HeaderComponent from './components/Header/Header';

function App() {

  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as 'light' | 'dark' | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeName(savedTheme);
    }
  }, [])

  return (
    <ThemeProvider theme={themeName === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <header>
        <HeaderComponent 
          themeName={themeName} 
          setThemeName={setThemeName}
        />
      </header>
    </ThemeProvider>
  )
}

export default App
