import { useState } from "react";
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    
    if (response.status === 200) {
      alert("Registration successful");
      setRedirect(true);
    } else alert("Registration failed.");
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserame(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;