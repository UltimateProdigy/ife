import Image from "next/image";
import Birkens from "../../../../public/Birkenstock.jpg";
import "./shopnow.css";

const Shopnow = () => {
  return (
    <div className="shopnow-div">
      <Image className="birkens" src={Birkens} width={400} alt="birkenstock" />
      <div>
        <h3 className="level-up">Be your Own Level</h3>
        <p className="level-up-intro">
          The right shoes can take any outfit from basic to stylish with just a
          few steps. At our shoe store, we have a wide variety of stylish shoes
          to help you create the perfect look. From contemporary sneakers to
          classic loafers, we have something to match all tastes and occasions.
          Our shoes are designed to be comfortable, durable, and fashionable, so
          you can look and feel your best no matter what you’re wearing.
        </p>
        <button className="shopbtn">Shop Now</button>
      </div>
    </div>
  );
};

export default Shopnow;
