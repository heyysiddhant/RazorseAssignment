import { useState } from "react";

const User = () => {
  // State
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");

  const [editId, setEditId] = useState(null);

  // ADD & UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    // UPDATE
    if (editId !== null) {
      const updatedUsers = users.map((user) =>
        user.id === editId
          ? {
              ...user,
              name,
              fullName,
              email,
              gender,
            }
          : user,
      );

      setUsers(updatedUsers);

      setEditId(null);
    }

    // ADD
    else {
      const newUser = {
        id: Date.now(),
        name,
        fullName,
        email,
        gender,
      };

      setUsers([...users, newUser]);
    }

    // Clear Inputs
    setName("");
    setFullName("");
    setEmail("");
    setGender("Male");
  };

  // DELETE
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);

    setUsers(filteredUsers);
  };

  // EDIT
  const handleEdit = (user) => {
    setName(user.name);
    setFullName(user.fullName);
    setEmail(user.email);
    setGender(user.gender);

    setEditId(user.id);
  };

  return (
    <div className="page">
      <h1>Basic CRUD App</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Radio Buttons */}

        <div>
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        <button type="submit">
          {editId !== null ? "Update User" : "Add User"}
        </button>
      </form>

      <hr />

      {/* User List */}

      {users.map((user) => (
        <div key={user.id} className="user-box">
          <h3>First Name: {user.name}</h3>

          <h3>Full Name: {user.fullName}</h3>

          <h3>Email: {user.email}</h3>

          <h3>Gender: {user.gender}</h3>

          <button onClick={() => handleEdit(user)}>Edit</button>

          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default User;
