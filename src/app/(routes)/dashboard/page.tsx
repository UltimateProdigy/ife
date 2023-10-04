import Navbar from "@/app/components/navbar/navbar";
import Hersosection from "@/app/components/herosection/hersosection";
import Shopnow from "@/app/components/shopnow/shopnow";
import Trending from "@/app/components/trending/trending";
import Subscribe from "@/app/components/subscribe/subscribe";
import Footer from "@/app/components/footer/footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Hersosection />
      <Shopnow />
      <Trending />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Dashboard;
