import { useState } from 'react';
import Input from "./components/Input";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-4 p-8 max-w-md">
      <Input
        label="Your Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={email && !email.includes('@') ? "Please enter a valid email" : ""}
      />
    </div>
  );
};

export default App;