import React, { useContext } from "react";
import { ScheduleContext } from "../Contexts/ScheduleContext";
import NavBar from "./NavBar";
import DayCard from "./DayCard";

function LineupPage() {
  const scheduleDataArry = useContext(ScheduleContext);

 
  return (
    <>
    
    <NavBar/>
    
    <button onClick={scheduleData}>Click TO SEE LINEUP</button>

      <DayCard
      day='Weekday name'
      firstArtist='Name of artist'
      secondArtist='Name of artist'
      thirdArtist='Name of artist'
      forthArtist='Name of artist'></DayCard>
    

    </>
  );
}

export default LineupPage;
