import React from "react";
import mapStages from "../../public/mapStages.svg";
import Title from "./UI/Title";
import ProgramTable from "./sections/ProgramTable";

function ProgramPage(props) {

  
  return (
  <section>
    <div className="map">
      <img src={mapStages} alt="map" />
    </div>
    <section>
      <Title content="Program" className="title"/>
      <ProgramTable />
    </section>

  </section>
  );
}

export default ProgramPage;
