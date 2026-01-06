import Button from "./components/Button"
const App = () => {
  return (
    <div className="space-y-4 p-8">
      <Button onClick={() => alert('Primary!')}>Primary Button</Button>
      <Button variant="danger" onClick={() => alert('Danger!')}>Delete</Button>
      <Button variant="secondary" onClick={() => alert('Secondary!')}>Cancel</Button>
    </div>
  )
}

export default App
