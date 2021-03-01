import HeadBanner from "../../UI/HeadBanner/HeadBanner";
import ProductList from "../../container/ProductList/ProductList";
import BannerClock from "../../UI/BannerClock/BannerClock";

import { BANNER_IMAGES } from "../../constant/SLiderList";

function Home() {
  return (
    <div className="Home">
      <HeadBanner SliderList={BANNER_IMAGES} BannerClock={BannerClock}></HeadBanner>

      <ProductList></ProductList>
    </div>
  );
}

export default Home;
