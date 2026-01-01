import { useState } from 'react'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen(prev => !prev)

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <p>This is a modal</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
