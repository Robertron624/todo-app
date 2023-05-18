import { useState } from 'react'
import './App.scss'
import { ThemeContext } from './contexts/themeContext'

function App() {
  const [theme, setTheme] = useState<string>('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    </ThemeContext.Provider>
  )
}

export default App
