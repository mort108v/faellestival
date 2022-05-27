import React, { useState, useContext} from "react";
import { BandsContext } from "../../Contexts/BandsContext.js";
import Banner from "../UI/Banner";
import Artist from "../UI/Artist";

function BannerSection() {
  const [count, setCount] = useState(0);



  const bandsData = useContext(BandsContext);

  let bandsGenre = bandsData.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue.genre) === -1) {
      previousValue.push(currentValue.genre);
    }
    return previousValue;
  }, []);

  

  const data = ["7 Days", "3 Stages", bandsData.length + " bands"];

  return (
    <section>
      <Banner className="banner1">{data[0]}</Banner>
      <Banner className="banner2">{data[1]}</Banner>
      <Banner className="banner1">{data[2]}</Banner>
      <Banner className="banner2">
        {bandsGenre.map((genre) => (
          <Artist key={Math.random()} content={genre} />
        ))}
      </Banner>
    </section>
  );
}

export default BannerSection;
