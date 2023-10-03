import Trendingcard from "./trendingcard";
import "./trending.css";
import Slide1 from "./Male-Slide.jpg";
import Slide2 from "./Female-snow-slide.jpg";
import Bag1 from "./Female-Bag-1.jpg";
import Bag2 from "./Female-Bag-2.jpg";

const Trending = () => {
  return (
    <div>
      <p className="trending">Trending in 2023</p>
      <div className="trending-div">
        <Trendingcard
          shoe={Slide1}
          width={250}
          name="Male Slides"
          description="Classy male Slides"
        />
        <Trendingcard
          shoe={Slide2}
          width={250}
          name="Female Slides"
          description="Classy female Slides"
        />
        <Trendingcard
          shoe={Bag1}
          width={250}
          name="Designer Bags"
          description="Classy designer Bags"
        />
        <Trendingcard
          shoe={Bag2}
          width={250}
          name="Designer Bags"
          description="Classy designer Bags"
        />
      </div>
    </div>
  );
};

export default Trending;
