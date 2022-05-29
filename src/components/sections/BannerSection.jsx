import React, { useState, useContext, useEffect } from "react";
import { BandsContext } from "../../Contexts/BandsContext.js";
import Banner from "../UI/Banner";
import Artist from "../UI/Artist";

function BannerSection(props) {
  const [count, setCount] = useState(1);
  let limit = 4;

  // useEffect(() => {
  //   const intervalBanner =
  //   setInterval(() => {

  //   setCount((count) => {
  //     console.log(count);
  //     return prevCount + 1;
  //   });
  // }, 4000);

  //   setCount((count) => {
  //     console.log(count);
  //     return prevCount + 1;
  //   });
  // }, 4000);

  //   if (count === limit) {
  //     clearInterval(intervalBanner);
  //     console.log('interval cleared!');
  //   }

  // }, []);

  const bandsData = useContext(BandsContext);

  let bandsGenre = bandsData.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue.genre) === -1) {
      previousValue.push(currentValue.genre);
    }
    return previousValue;
  }, []);

  const data = ["7 Days", "3 Stages", bandsData.length + " bands"];

  return (
    <section className={props.className}>
      {count == 1 && <Banner className="banner1">{data[0]}</Banner>}
      {count == 2 && <Banner className="gradientTxt">{data[1]}</Banner>}
      {count == 3 && <Banner className="banner1">{data[2]}</Banner>}
      {count == 4 && (
        <Banner className="gradientTxt">
          {bandsGenre.map((genre) => (
            <Artist key={Math.random()} content={genre} />
          ))}
        </Banner>
      )}
    </section>
  );
}

export default BannerSection;
