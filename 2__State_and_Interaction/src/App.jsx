import { useState } from 'react'

const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => { setIsVisible(prev => !prev) }

  return (
    <div>
      {isVisible && <div>Now you see me</div>}
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default App
