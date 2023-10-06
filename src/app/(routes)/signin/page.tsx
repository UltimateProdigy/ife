'use client';

import { Input } from 'antd'; // Import Ant Design Input component
import "./signin.css";
import Link from "next/link";
import { FormEvent, useState } from "react"; // Import useState instead of useRef for form fields
import { useRouter } from "next/navigation";

const Signin: React.FC = () => {
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const router = useRouter();

  const username = localStorage.getItem("Username") || ""; // Retrieve username from localStorage
  const password = localStorage.getItem("Password") || ""; // Retrieve password from localStorage

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    
    // Check if entered username and password match the stored values
    if (username === loginUsername && password === loginPassword) {
      alert("Signed In Successfully");
      router.push("/dashboard");
    } else {
      alert("Invalid Credentials, Please Try Again!!!");
    }
  };

  return (
    <div>
      <h3 className="login-intro">Please Log In</h3>
      <form className="signin-form" onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          required
        />
        <Input.Password
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
