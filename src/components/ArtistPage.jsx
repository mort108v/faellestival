import React, {useContext} from "react";
import { BandsContext } from "../Contexts/BandsContext";


function ArtistPage(props) {
  const bands = useContext(BandsContext)
  console.log("artist", props.pickedId);

  return (
    <>

ARTIST PAGE

{props.pickedId.name}

      {/* <ArtistHeader {...props} />
      <ArtistBio {...props} />
      <ArtistSection {...props} />  */}
    </>
  );
}

export default ArtistPage;
