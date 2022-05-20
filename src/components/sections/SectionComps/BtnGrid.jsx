import React from 'react'

function BtnGrid(props) {
    function handleClick() {
        console.log("tuvieja");
        props.setShowLineup(true);
        props.setShowLandPage(false);
    }
    function showLineup() {
        console.log("showlineup");
        props.setShowLineup(true);
        props.setShowLandPage(false);
    }
    function showTickets() {
        props.setShowLineup(true);
        props.setShowLandPage(false);
        console.log("showtickets");

    }
    return (
        <div>
            <button onClick={handleClick}>show lineup</button>
            <Btn content="Line Up" className="secBtn" onClick={showLineup} /> 
            <Btn content="Tickets" className="secBtn" onClick={showTickets} />
        </div>
    );
}

function Btn(props) {
    return (
    <>
    <button>{props.content}</button>
    </>
    )
}

export default BtnGrid
