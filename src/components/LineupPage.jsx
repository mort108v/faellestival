import React, { useContext } from "react";
import { BandsContext } from "../Contexts/BandsContext";
import { ScheduleContext } from "../Contexts/ScheduleContext";

function LineupPage() {
  const scheduleData = useContext(ScheduleContext);
  const bands = useContext(BandsContext);

  let mondaybandsM = scheduleData.Midgard.mon; 
  let mondaybandsV = scheduleData.Vanaheim.mon; 
  let mondaybandsJ = scheduleData.Jotunheim.mon; 

  // let WeekPlan = ;

  // {weekPlan.map((timeslot) => {
  //   if (timeslot.act.includes("break")) {} else {
  //     return <DayCard data={{timeslot.act}} />
  //   }})}
  


  return (
    <div>
      {mondaybandsM.map((timeslot) => {
      if (timeslot.act.includes("break")) {} else {
        return <li>{timeslot.act}</li>
      }})}
            {mondaybandsV.map((timeslot) => {
      if (timeslot.act.includes("break")) {} else {
        return <li>{timeslot.act}</li>
      }})}
            {mondaybandsJ.map((timeslot) => {
      if (timeslot.act.includes("break")) {} else {
        return <li>{timeslot.act}</li>
      }})}

{/* <button onClick={manageClick}>consolelog</button>
      LineupPage */}
    </div>
  );
}

export default LineupPage;
