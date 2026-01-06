import { useState } from "react"

import Modal from "./components/Modal"
import Button from "./components/Button"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is modal content!</p>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal>
    </div>
  )
}

export default App
