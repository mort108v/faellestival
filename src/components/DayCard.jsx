import React from "react";

function DayCard(props) {
  return (
     
    <div className="card-container">
    <h1 className="day-title">{props.day}</h1>
      <h1 className="firstartist">{props.firstArtist}</h1>
      <div>
        <h2 className="secondartist">{props.secondArtist}</h2>
        <h2 className="secondartist">{props.secondArtist}</h2>
      </div>
      <div>
        <h3 className="thirdartist">{props.thirdArtist}</h3>
        <h3 className="thirdartist">{props.thirdArtist}</h3>
        <h3 className="thirdartist">{props.thirdArtist}</h3>
      </div>

      <div>
        <p className="forthartist">{props.forthArtist}</p>
        <p className="forthartist">{props.forthArtist}</p>
        <p className="forthartist">{props.forthArtist}</p>
      </div>

    </div>
  );
}

export default DayCard;
