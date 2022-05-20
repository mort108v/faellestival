import React, { useContext } from "react";
import { ScheduleContext } from "../Contexts/ScheduleContext";

function LineupPage() {
  const scheduleData = useContext(ScheduleContext);

  // function manageClick() {
  //   // console.log(scheduleData);
  //   scheduleData.map(function(stage1, stage2, stage3) {
  //     console.log(stage1.fri, stage2.fri, stage3.fri);
  //   })
  // }
  return (
    <div>
lineup here
      {scheduleData.map((stage) => ( <li>{stage}</li>))}
      <button onClick={manageClick}>click</button>
      LineupPage
    </div>
  );
}

export default LineupPage;
