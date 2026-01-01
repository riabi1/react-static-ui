import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prev => prev + 1)

  return (
    <div>
      <p>count {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
