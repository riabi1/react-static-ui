import { useState } from "react"

import Card from "./components/Card"
import Button from "./components/Button"
import Input from "./components/Input"

const App = () => {
  const [email, setEmail] = useState("")

  return (
    <div className="space-y-4 p-8">
      {/* Simple text card */}
      <Card>
        <h2 className="text-xl font-bold">Welcome</h2>
        <p className="text-gray-600">This is a simple card.</p>
      </Card>

      {/* Card with Button */}
      <Card className="max-w-sm">
        <h3 className="font-semibold mb-2">User Profile</h3>
        <p className="text-sm text-gray-500 mb-4">john@example.com</p>
        <Button size="small">Edit Profile</Button>
      </Card>

      {/* Card with Input */}
      <Card className="max-w-md">
        <h3 className="font-semibold mb-4">Login</h3>
        <Input label="Email" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} error={email && !email.includes("@") ? "Invalid email address" : ""} />
      </Card>
    </div>
  )
}

export default App
