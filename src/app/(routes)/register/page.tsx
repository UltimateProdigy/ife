"use client";

import "./register.css";
import React, { useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
      toast.error("All fields are required");
      return;
    }

    if (password !== retypePassword) {
      toast.error("Passwords do not match");
      return;
    }

    localStorage.setItem("Firstname", firstName);
    localStorage.setItem("Othername", otherName);
    localStorage.setItem("E-mail", email);
    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);

    toast.success("Account Created Successfully");
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
        />
        <input
          className="register-input"
          ref={otherNameRef}
          type="text"
          placeholder="Other Name"
        />
        <input
          className="register-input"
          ref={emailRef}
          type="email"
          placeholder="E-mail"
        />
        <input
          className="register-input"
          ref={usernameRef}
          type="text"
          placeholder="Username"
        />
        <input
          className="register-input"
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
        <input
          className="register-input"
          ref={retypePasswordRef}
          type="password"
          placeholder="Retype-Password"
        />
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
