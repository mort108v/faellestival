import React, {useContext} from 'react';
import { BandsContext } from "../../Contexts/BandsContext.js";
import { ScheduleContext } from "../../Contexts/ScheduleContext.js";


function Banner(props) {
    const bandsData = useContext(BandsContext);
    const stagesData = useContext(ScheduleContext);

  return (
    <>
{props.content && <p>{props.content}</p>}
{props.type == "stages" && <p>{stagesData.length} Stages </p> }
{props.type == "bandsQty" && <p>{bandsData.length} Bands </p> }
{props.type == "genre" && <p>{bandsData.length} genres </p> }

    </>
  )
}

export default Banner