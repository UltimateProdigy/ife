"use client";

import { Input } from "antd";
import "./signin.css";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Signin: React.FC = () => {
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const router = useRouter();

  const storedUsername = localStorage.getItem("Username");
  const storedPassword = localStorage.getItem("Password");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (storedUsername === loginUsername && storedPassword === loginPassword) {
      alert("Signed In Successfully");
      router.push("/dashboard");
    } else {
      alert("Incorrect Username or Password");
    }
  };

  return (
    <div>
      <h3 className="login-intro">Please Log In</h3>
      <form className="signin-form" onSubmit={handleLogin}>
        <Input
          className="input"
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          required
        />
        <Input.Password
          className="input"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Sign In
        </button>
        <Link href="/register">
          <p className="instead">Register instead?</p>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
