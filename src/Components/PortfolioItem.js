import React from "react";
import PropTypes from "prop-types";

const PortfolioItem = (props) => {
  return (
    <div>
      <div onClick = {() => props.whenPortfolioItemClicked(props.id)}>
        <h4>Album Cover:</h4><img src={props.albumCover} />;
        <h4>Artist: {props.artistName}</h4>
        <h4>Album: {props.albumName}</h4>
        <h4>Song: {props.songName}</h4>
        <h4>Notes: {props.description}</h4>
        <h5>Spotify: {props.spotify}</h5>
        <h5>Apple Music: {props.appleMusic}</h5>
        <hr/>
      </div>
    </div>
  )
}

PortfolioItem.propsTypes = {
  albumCover: PropTypes.string,
  artistName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  spotify: PropTypes.string,
  appleMusic: PropTypes.string,
  id: PropTypes.string,
  whenPortfolioItemClicked: PropTypes.func
}

export default PortfolioItem;