import React, { useContext } from "react";
import { ScheduleContext } from "../Contexts/ScheduleContext";
import DayCard from "./DayCard";

function LineupPage() {
  const scheduleData = useContext(ScheduleContext);
  console.log(scheduleData)
  const scheduleArry = Object.entries(scheduleData.Midgard.mon)
  scheduleArry.map((el)=> (
    console.log("Elements:",el.act)
  ))
  // const {mon} = scheduleData.Midgard
  // console.log({mon})


  
  return (
    
    <>
      {scheduleArry.map((days)=>(
     <div>{days[0]}</div>
  ))}
    

  </>
  )
  }

export default LineupPage