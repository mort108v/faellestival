import React from "react";
import Title from "./UI/Title";
import ProgramTable from "./sections/ProgramTable";
import MainSect from "./sections/MainSect";

function ProgramPage(props) {
  return (
    <section>
      <MainSect bcFest="Main" className="programHeader" content="Program" />
      <section className="list">
        {/* <Title content="Program" className="title" /> */}
        <ProgramTable />
      </section>
    </section>
  );
}

export default ProgramPage;

// {/* <section className={props.className}>
//       {props.bcReg && <Breadcrumbs className="breadCrumbs" bc={props.bcReg} action={props.action} />}
//       {/* {props.bcFest && <Breadcrumbs bc={props.bcFest} action={goToFestApp} />} */}
//       <HeaderBg className="heroBg" />
//       <MainTitle className="mainTitle" content={props.content} />
//     </section> */}
