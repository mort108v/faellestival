import React from 'react'
import Btn from "../UI/Btn.jsx";

function BtnGrid(props) {

    function showLineup() {
        console.log("showlineup");
        props.setShowLineup(true);
        props.setShowLandPage(false);
    }
    function showTickets() {
        props.setShowTicketsPage(true);
        props.setShowLandPage(false);
        console.log("showtickets");

    }
    return (
        <div>
            <Btn content="Line Up" action={showLineup} /> 
            <Btn content="Tickets" action={showTickets} />
        </div>
    );
}

export default BtnGrid
