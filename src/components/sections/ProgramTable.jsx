import React, { useState, useContext } from "react";
import { ScheduleContext } from "../../Contexts/ScheduleContext";
import Controls from "../UI/Controls";
import Title from "../UI/Title";

function ProgramTable() {
  const schedule = useContext(ScheduleContext);
  const [dayProgram, setDayProgram] = useState([]);
  const [day, setDay] = useState("Monday");
  const [vStage, setVStage] = useState(schedule.Vanaheim);
  const [mStage, setMStage] = useState(schedule.Midgard);


  let xday = day.toLowerCase().substring(0, 3);
  console.log(xday);

  return (
    <section>
      <Controls className="programControls" setDay={setDay} />
      <Title content={day} className="subTitle" />
      <table className="list">
        <thead>
          <tr className="tableHead">
            <th>Time</th>
            <th>Jotunheim</th>
            <th>Vanaheim</th>
            <th>Midgard</th>
          </tr>
        </thead>
        <tbody>
            {/* {showTable()} */}
          {schedule.Jotunheim[xday].map((timeslot, index) => (
            <tr>
              <td>{timeslot.start}</td>
              <td>{timeslot.act}</td>
              <td>{vStage[xday][index].act}</td>
              <td>{mStage[xday][index].act}</td>
            </tr>
          ))}

          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProgramTable;
