import "./signin.css";
import Link from "next/link";

const Signin = () => {
  return (
    <div>
      <h3 className="login-intro">Please Log In</h3>
      <form className="signin-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
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
