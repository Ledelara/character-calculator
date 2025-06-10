import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './components/StyledComponents/globalStyle';
import HeaderComponent from './components/Header/Header';
import { CardComponent } from './components/Card/Card';
import './App.css';
import { Typography } from './components/StyledComponents/Typography/Typography';

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
      <HeaderComponent 
        themeName={themeName} 
        setThemeName={setThemeName}
      />
      <section className='typography-container'>
        <Typography>
          Analyze yout text in real-time.
        </Typography>
      </section>
      <section>
        <CardComponent />
      </section>
    </ThemeProvider>
  )
}

export default App
