import React from 'react';
import Btn from "../UI/Btn.jsx";
import FullLineup from "./FullLineup.jsx";
import styles from "../../scss/_landPage.module.scss";

function LineupSection(props) {
    function goToLineup() {
        console.log("work");
        props.setShowLandPage(false);
        props.setShowLineup(true)
    }
    return (
<section className={props.className} >
    <FullLineup className="gradientTxt" />
    <Btn className="secBtn" content="See Day by Day" action={goToLineup} />
</section>
    )
}

export default LineupSection
