import { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <p>{inputValue}</p>
      <button onClick={() => setInputValue('')}>Clear</button>
    </div>
  )
}

export default App
