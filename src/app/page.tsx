import Image from "next/image";
import Background from "./_assets/images/homebackground.jpg";
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Image
        alt="background"
        src={Background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div>
        <h1 className="welcome">ÌFÉ Leather Creatives</h1>
        <div className="signinup">
          <Link href="/signin">
            <button className="signin">Sign In</button>
          </Link>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
