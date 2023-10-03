import backgroundImg from "../../../../public/leather-shoe-herosection.png";
import Image from "next/image";
import "./herosection.css";

const Hersosection = () => {
  return (
    <div className="hero">
      <div>
        <p className="intro">
          Step Into Style with
          <br />
          Our Trendy Leathers!
        </p>
        <div className="yeardiv">
          <h6 className="year">2023</h6>
        </div>
        <p className="aboutbiz">
          Our collections include a wide range of shoes for men, women, and
          children.
        </p>
        <button className="shopbtn">Shop Now</button>
      </div>
      <Image className="shoeimg" src={backgroundImg} width={650} alt="shoeimg" />

    </div>
  );
};

export default Hersosection;
