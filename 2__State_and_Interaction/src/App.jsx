import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <div className={theme}>
      <p>The current theme is {theme}.</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div >
  )
}

export default App
