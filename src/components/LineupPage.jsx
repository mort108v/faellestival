import React, { useContext } from "react";
import { ScheduleContext } from "../Contexts/ScheduleContext";

function LineupPage() {
  const scheduleData = useContext(ScheduleContext);

  function manageClick() {
    console.log(scheduleData);
  }
  return (
    <div>
      <button onClick={manageClick}>click</button>
      LineupPage
    </div>
  );
}

export default LineupPage;
