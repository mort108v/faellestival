import React from "react";

function ArtistCard(props) {



        
        
        
//         let imgPath;
//         let img = props.img;
//         img.includes("http")
//         ? (imgPath = 'url(' + props.img + ')')
//         : (imgPath = 'url(https://a3m-festival.herokuapp.com/logos/' + img);
//         console.log(imgPath);
        
//         let root = document.documentElement;
//   root.style.setProperty('--img', imgPath);



  return (
    <button
      key={props.key}
      className={props.className}
      onClick={props.action}
    >
        <h2> {props.content}</h2>
    
    </button>
  );
}

export default ArtistCard;