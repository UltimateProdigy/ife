import Navbar from "./components/navbar/navbar";
import Hersosection from "./components/herosection/hersosection";
import Shopnow from "./components/shopnow/shopnow";
import Trending from "./components/trending/trending";
import Subscribe from "./components/subscribe/subscribe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hersosection />
      <Shopnow />
      <Trending />
      <Subscribe />
    </div>
  );
};

export default Home;
