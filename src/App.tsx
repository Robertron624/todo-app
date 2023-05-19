import { useState } from 'react'
import './App.scss'
import { ThemeContext } from './contexts/themeContext'
import Layout from './layout'

function App() {
  const [theme, setTheme] = useState<string>('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
          <Layout>
            <div className="content-wrapper">
              
            </div>
          </Layout>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
