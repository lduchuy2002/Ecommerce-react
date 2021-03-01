import HeadBanner from "../../UI/HeadBanner/HeadBanner";
import ProductList from "../../container/ProductList/ProductList";
import BannerClock from "../../UI/BannerClock/BannerClock";

import { BANNER_IMAGES } from "../../constant/SLiderList";
import ProductApi from "../../api/productApi";
import { ROUTE_LAPTOP } from "../../constant/StaticConst";

function Home() {
  return (
    <div className="Home">
      <HeadBanner SliderList={BANNER_IMAGES} BannerClock={BannerClock}></HeadBanner>

      <ProductList getAll={ProductApi.getAll} route={ROUTE_LAPTOP}></ProductList>
    </div>
  );
}

export default Home;
