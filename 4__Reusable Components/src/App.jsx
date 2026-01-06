import { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Modal from './components/Modal';
import Input from './components/Input';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '' }); // NEW

  const handleAddUser = () => {
    // Validate fields
    const newErrors = {
      name: !userName.trim() ? 'This field is required' : '',
      email: !userEmail.trim() ? 'This field is required' : ''
    };

    setErrors(newErrors);

    // If there are errors, don't submit
    if (newErrors.name || newErrors.email) return;

    // Add user
    const newUser = {
      id: Date.now(),
      name: userName,
      email: userEmail
    };
    setUsers([...users, newUser]);

    // Reset form
    setUserName('');
    setUserEmail('');
    setErrors({ name: '', email: '' });
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setUserName('');
    setUserEmail('');
    setErrors({ name: '', email: '' }); // Clear errors when closing
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button size="large" onClick={() => setIsOpen(true)}>
            Add User
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {users.map(user => (
            <Card key={user.id}>
              <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-4">{user.email}</p>
              <Button
                variant="danger"
                size="small"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleAddUser();
        }}>
          <div className="space-y-4">
            <Input
              label="Name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                setErrors({ ...errors, name: '' }); // Clear error on change
              }}
              placeholder="Enter name"
              error={errors.name} // Show error
            />
            <Input
              label="Email"
              type="email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                setErrors({ ...errors, email: '' }); // Clear error on change
              }}
              placeholder="Enter email"
              error={(userEmail && !userEmail.includes('@')) ? 'Invalid email address' : errors.email} // Show error
            />
          </div>
          <div className="flex gap-2 mt-6">
            <Button type="submit">Add User</Button>
            <Button
              variant="secondary"
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;