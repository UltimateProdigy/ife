import Navbar from "./components/navbar/navbar";
import Hersosection from "./components/herosection/hersosection";
import Shopnow from "./components/shopnow/shopnow";
import Trending from "./components/trending/trending";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hersosection />
      <Shopnow />
      <Trending />
    </div>
  );
};

export default Home;
