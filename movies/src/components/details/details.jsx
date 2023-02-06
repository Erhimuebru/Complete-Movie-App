import "./details.css";
import { useState } from "react";
import Player from "../Player/Player";
import { TbMovie as Movie } from "react-icons/tb";
const Details = ({ data }) => {
  console.log("data", data);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((pre) => !pre);
  };

  return (
    <div>
      <div className="details-div">
        <img className="profile-image" src={data.image} alt="" />
        <div className="movieTitle">{data.title}</div>
        <div className="description">
          <div className="data-plot">{data.plot}</div>
          <div className="release">
            <p className="release-date">Release Date:</p>{" "}
            <div className="release-data">{data.releaseDate}</div>
          </div>
        </div>
      </div>
      <div className="btn-div">
        <button className="btn" onClick={() => setModalIsOpen(true)}>
          <Movie className="movie-logo" />
          <p className="trailer-text">Play Trailer</p>
        </button>
      </div>
      {modalIsOpen && (
        <div>
          <Player
            toggleModal={toggleModal}
            url={data.trailer.linkEmbed}
            title={data.title}
          />
        </div>
      )}
      <p>Cast</p>
    </div>
  );
};

export default Details;
