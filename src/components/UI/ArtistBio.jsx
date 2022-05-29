import React from "react";

function ArtistBio(props) {
  return (
    <div className="artist-container">
      <div className="artist-genre">{props.pickedId.genre}</div>
      <ul className="artist-list">
        Band Members:
        {props.pickedId.members.map((artist) => (
          <li className="artist">{artist}</li>
        ))}
      </ul>
      <div className="artist-bio">{props.pickedId.bio}</div>
      <div className="logo-credits">
        {props.pickedId.logoCredits && (
          <p>Logo credits: {props.pickedId.logoCredits}</p>
        )}
      </div>
    </div>
  );
}

export default ArtistBio;
