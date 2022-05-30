import React, { useContext } from "react";
// import { BandsContext } from "../Contexts/BandsContext";
import { ScheduleContext } from "../Contexts/ScheduleContext";

function LineupPage() {
  const scheduleData = useContext(ScheduleContext);
  // const bands = useContext(BandsContext);
  // mondayData = {day: "Monday", date: "July 27th"};

  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dayShort = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  let monBands = [
    ...scheduleData.Jotunheim.mon,
    ...scheduleData.Vanaheim.mon,
    ...scheduleData.Midgard.mon,
  ];
  let tuesBands = [
    ...scheduleData.Jotunheim.tue,
    ...scheduleData.Vanaheim.tue,
    ...scheduleData.Midgard.tue,
  ];
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

      {dayShort.map((day, index) => (
        <>
      <div>
        {week[index]}</div>
        <p>{scheduleData.Jotunheim[day].map((day) => <span>{day.act}</span>)}</p>
        </>))}

      {/* {dayProgram.map((timeslot) => {
        if (timeslot.act.includes("break")) {
        } else {
          return <li>{timeslot.act}</li>;
        }
      })} */}
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
