'use client'

import Password from "antd/es/input/Password";
import "./signin.css";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

const Signin: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter()

  const loginUsername = usernameRef.current?.value

  const username = localStorage.getItem('Username')
  const password = localStorage.getItem('Password')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <h3 className="login-intro">Please Log In</h3>
      <form className="signin-form" onSubmit={handleLogin}>
        <input type="text" ref={usernameRef} placeholder="Username" required />
        <input type="password" ref={passwordRef} placeholder="Password" required />
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
