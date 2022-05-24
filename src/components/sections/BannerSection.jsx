import React, {useState} from "react";
import Banner from "../UI/Banner";

function BannerSection() {
const [count, setCount] = useState(0)
const data = ["7 Days", "3 Stages"]
  return (
    <section>
      <Banner className="banner1">
          {data[0]}
      </Banner>
      {/* <Banner className="banner2">
          3 Stages
      </Banner> */}
      {/* <Banner type="bandsQty" className="banner1" />

      <Banner type="genre" className="banner2" /> */}
    </section>
  );
}

export default BannerSection;
