import React, { useContext } from "react";
import { BandsContext } from "../Contexts/BandsContext";
import { ScheduleContext } from "../Contexts/ScheduleContext";

function LineupPage() {
  const scheduleData = useContext(ScheduleContext);
  const bands = useContext(BandsContext);

  
  let monBands = [...scheduleData.Jotunheim.mon, ...scheduleData.Vanaheim.mon, ...scheduleData.Midgard.mon];
  let tuesBands = [...scheduleData.Jotunheim.tue, ...scheduleData.Vanaheim.tue, ...scheduleData.Midgard.tue];
  // let mondaybandsV = scheduleData.Vanaheim.mon; 
  // let mondaybandsJ = scheduleData.Jotunheim.mon; 
  
  let dayProgram = [...monBands, ...tuesBands];
  // let WeekPlan = ;

  // {weekPlan.map((timeslot) => {
  //   if (timeslot.act.includes("break")) {} else {
  //     return <DayCard data={{timeslot.act}} />
  //   }})}
  


  return (
    <div>
      {dayProgram.map((timeslot) => {
      if (timeslot.act.includes("break")) {} else {
        return <li>{timeslot.act}</li>
      }})}
            {/* {mondaybandsV.map((timeslot) => {
      if (timeslot.act.includes("break")) {} else {
        return <li>{timeslot.act}</li>
      }})}
            {mondaybandsJ.map((timeslot) => {
      if (timeslot.act.includes("break")) {} else {
        return <li>{timeslot.act}</li>
      }})} */}

{/* <button onClick={manageClick}>consolelog</button>
      LineupPage */}
    </div>
  );
}

export default LineupPage;
