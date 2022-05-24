import React from 'react';
// import { BandsContext } from "../../Contexts/BandsContext.js";
// import { ScheduleContext } from "../../Contexts/ScheduleContext.js";

function Banner(props) {
    return (
        <p>
            {props.children}
        </p>
    )
}

// function Banner(props) {
//     const bandsData = useContext(BandsContext);
//     const stagesData = useContext(ScheduleContext);
    
//     // const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
//     // let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
//     //   if (previousValue.indexOf(currentValue) === -1) {
//     //     previousValue.push(currentValue)
//     //   }
//     //   return previousValue
//     // }, [])
    
//     // console.log(myArrayWithNoDuplicates)
//   return (
//     <>
// {props.content && <p>{props.content}</p>}
// {props.type == "bandsQty" && <p>{bandsData.length} Bands </p> }
// {props.type == "genre" && <p>{bandsData.length} genres </p> }

//     </>
//   )
// }

export default Banner