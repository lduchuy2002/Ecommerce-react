import HeadBanner from "../../UI/HeadBanner/HeadBanner";
import ProductList from "../../container/ProductList/ProductList";
import BannerClock from "../../UI/BannerClock/BannerClock";

import { BANNER_IMAGES } from "../../constant/SLiderList";
import ProductApi from "../../api/productApi";
import { ROUTE_LAPTOP, LAPTOP_DATA_LENGTH } from "../../constant/StaticConst";

function Home() {
  return (
    <div className="Home">
      <HeadBanner SliderList={BANNER_IMAGES} BannerClock={BannerClock}></HeadBanner>

      <ProductList
        getAll={ProductApi.getAll}
        route={ROUTE_LAPTOP}
        DATA_LENGTH={LAPTOP_DATA_LENGTH}
      ></ProductList>
    </div>
  );
}

export default Home;
