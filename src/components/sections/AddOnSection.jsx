import React from "react";
import SectionTitle from "../UI/SectionTitle";
import AddOnCard from "../UI/AddOnCard";
import content from "../../../public/addOnContent.json";
import CardTitle from "../UI/CardTitle"
import CardContent from '../UI/CardContent'
import AddOnCheckOut from '../UI/AddOnCheckOut'
import Btn from '../UI/Btn'

function AddOnSection() {
  console.log(content[0].title);

  return (
    <section className="addOnSection">
      <SectionTitle
        className="formTitle"
        content="Get the Full Faellestival Experience"
      />
      <div className="cardGrid">
        <AddOnCard title={content[0].title}>
          <CardTitle content={content[0].title} className="addOnCardTitle" />
          <CardContent />
        <AddOnCheckOut>

        </AddOnCheckOut>
        <Btn>

        </Btn>

        </AddOnCard>
      </div>
    </section>
  );
}

export default AddOnSection;
