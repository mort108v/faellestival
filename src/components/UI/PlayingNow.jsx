import React, { useContext, useState, useEffect } from "react";
import { ScheduleContext } from "../../Contexts/ScheduleContext";
import PlayingCard from "./PlayingCard";

function PlayingNow() {
  const schedule = useContext(ScheduleContext);
  const [stageJNow, setStageJNow] = useState([]);

  let today = Date().split(" ");
  let [rawDay, , , , rawHour] = today;
  let currDay = rawDay.toLocaleLowerCase();
  let hour = rawHour.substring(0, 2);
  if (hour % 2 == 1) {
    hour = hour - 1;
  }
  let newHour = hour + ":00";
  let stageJArr = Object.entries(schedule.Jotunheim);
  let chosenDay = stageJArr.filter((day) => day[0] == currDay);
  let distrTime = [chosenDay[0][1]];
  let chosenTime = [...distrTime[0]];
  // let final = [ ...chosenTime];
  // chosenTime.start == hour ? console.log(chosenTime.start) : [];
  // let time = chosenTime.filter((timeslot) => timeslot.start == hour);

  
  useEffect(() => {
    for (let i = 0; i < chosenTime.length; i++) {
      if (chosenTime[i].start == newHour) {
        setStageJNow(chosenTime[i]);
      }
    }
    
  }, [newHour]);
  // let thisday = chosenDay[1];

  // const index = thisday.findIndex((timeslot) => timeslot.start = hour)

  // const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

  // const index = fruits.findIndex(fruit => fruit === "blueberries");

  // console.log(index); // 3
  // console.log(fruits[index]); // blueberries

  function checkDate() {
    // setActTime(chosenTime);
    console.log(stageJNow);
    // console.log(Object.keys(schedule[0]));
  }
  return (
    <div className="cardGrid">
      <PlayingCard jStage={stageJNow} />
    </div>
  );
}

{
  /* <div className={props.className}>
<Btn className="primBtn" content="When and Where" action={goToProgram} />
<CardTitle />
<CardContent />
</div> */
}

export default PlayingNow;
