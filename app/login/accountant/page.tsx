"use client";

import { useState } from "react";

export default function AccountantLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Minimal placeholder behavior
    console.log("Accountant Login clicked:", { username, password });
  };

  return (
    <div>
      <h1>Accountant Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
