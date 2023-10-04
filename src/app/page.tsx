import Image from "next/image";
import Background from "./_assets/images/homebackground.jpg";

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
        <h1 className="welcome">Welcome to ÌFÉ leathers</h1>
      </div>
    </div>
  );
};

export default Home;
