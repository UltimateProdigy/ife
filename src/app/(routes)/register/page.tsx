"use client";

import "./register.css";
import React, { useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const otherNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const retypePasswordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    const firstName = firstNameRef.current?.value;
    const otherName = otherNameRef.current?.value;
    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const retypePassword = retypePasswordRef.current?.value;

    if (
      !firstName ||
      !otherName ||
      !email ||
      !username ||
      !password ||
      !retypePassword
    ) {
      alert("All fields are required");
      return;
    }

    if (password !== retypePassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("Firstname", firstName);
    localStorage.setItem("Othername", otherName);
    localStorage.setItem("E-mail", email);
    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);

    alert("Account Created Successfully");
    router.push("/signin");
  };

  return (
    <div>
      <h3 className="register-here">Please Register Here</h3>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          className="register-input"
          ref={firstNameRef}
          type="text"
          placeholder="First Name"
          required
        />
        <input
          className="register-input"
          ref={otherNameRef}
          type="text"
          placeholder="Other Name"
          required
        />
        <input
          className="register-input"
          ref={emailRef}
          type="email"
          placeholder="E-mail"
          required
        />
        <input
          className="register-input"
          ref={usernameRef}
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="register-input"
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
        <input
          className="register-input"
          ref={retypePasswordRef}
          type="password"
          placeholder="Retype-Password"
          required
        />
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
