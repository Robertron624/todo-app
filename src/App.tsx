import { useState } from 'react'
import './App.scss'
import { ThemeContext } from './contexts/themeContext'
import Layout from './layout'
import NewTodo from './components/NewTodo'

function App() {
  const [theme, setTheme] = useState<string>('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
          <Layout>
            <main className="content-wrapper">
              <NewTodo />
            </main>
          </Layout>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
