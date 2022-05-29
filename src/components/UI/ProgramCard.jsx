import React, {useContext} from 'react';
import { ScheduleContext } from "../../Contexts/ScheduleContext";
import Btn from './Btn';
import CardTitle from './CardTitle';
import CardContent from './CardContent';

function ProgramCard(props) {
    const program = useContext(ScheduleContext);

    // const inventory = [
    //     {name: 'apples', quantity: 2},
    //     {name: 'bananas', quantity: 0},
    //     {name: 'cherries', quantity: 5}
    //   ];
      
    //   function isCherries(fruit) {
    //     return fruit.name === 'cherries';
    //   }
      
    //   console.log(inventory.find(isCherries));
    //   // { name: 'cherries', quantity: 5 }

    // bigArray.find(b => b.children.find(c=>c.City === 'city1'))
    // function findPickedId (timeslots) {
    //     return timeslots.act === props.pickedId.name
    // }

    // const foundPickedId = program.find(stages => stages.find(findPickedId));

    // console.log(foundPickedId);


    function goToProgram() {
        console.log("gotoprogram")
    }


    return (
        <div className={props.className}>
            <Btn className="primBtn" content="When and Where" action={goToProgram} />
            <CardTitle />
            <CardContent />
        </div>
    )
}

export default ProgramCard
