import React from "react";
import "./App.css";
// import Audio
import ramuloSong from "./audio/RamulooRamula.mp3";
// import images
import alluArjun from "./images/alluArjun.webp";
import pooja from "./images/pooja.jpg";
import nivetha from "./images/Nivetha.webp";
// import video
import earth from "./video/earth.mp4";


function App() {
  return (
    <div className="containerBlock">
      <h1>Ala Vaikuntapuram lo Trailer</h1>
      <div className="videoBlock">
        <video
          src="https://services.brninfotech.com/tws/media2/trailers/AlaVaikuntapuramloo.mp4"
          controls
          autoPlay
          muted
        ></video>
      </div>
      <h1>Actors</h1>
      <div className="container">
        <div className="box">
          <img src={alluArjun} alt="Image1" />
          <h2>Allu Arjun</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem eius porro eum officia accusantium distinctio!
            Assumenda beatae, nulla delectus nemo alias eligendi labore sed
            itaque totam ut. Tenetur, laudantium. Incidunt necessitatibus
            quibusdam magnam quo, unde cumque ratione molestias nemo quod iusto
            tempore cupiditate vel beatae at nostrum, perspiciatis obcaecati?
            Commodi.
          </p>
        </div>
        <div className="box">
          <img src={pooja} alt="Image2" />
          <h2>Pooja Hegde</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem eius porro eum officia accusantium distinctio!
            Assumenda beatae, nulla delectus nemo alias eligendi labore sed
            itaque totam ut. Tenetur, laudantium. Incidunt necessitatibus
            quibusdam magnam quo, unde cumque ratione molestias nemo quod iusto
            tempore cupiditate vel beatae at nostrum, perspiciatis obcaecati?
            Commodi.
          </p>
        </div>
        <div className="box">
          <img src={nivetha} alt="Image3" />
          <h2>Nivetha Pethuraj</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem eius porro eum officia accusantium distinctio!
            Assumenda beatae, nulla delectus nemo alias eligendi labore sed
            itaque totam ut. Tenetur, laudantium. Incidunt necessitatibus
            quibusdam magnam quo, unde cumque ratione molestias nemo quod iusto
            tempore cupiditate vel beatae at nostrum, perspiciatis obcaecati?
            Commodi.
          </p>
        </div>
      </div>
      <hr />
      <h1>Songs</h1>
      <div className="container">
        <div className="box">
          <img
            src="https://services.brninfotech.com/tws/media2/posters/ala vaikuntapuri.jpeg"
            alt="poster"
          />
          <audio
            src="https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/01 - Samajavaragamana.mp3"
            controls
          ></audio>
          <h2>Samajavaragamana song</h2>
        </div>
        <div className="box">
          <img
            src="https://services.brninfotech.com/tws/media2/posters/ala vaikuntapuri.jpeg"
            alt="poster"
          />
          <audio src={ramuloSong} controls></audio>
          <h2>Ramuloo Ramula Song</h2>
        </div>
      </div>
      <hr></hr>
      <h1>World wide Released Movie</h1>
      <div className="videoBlock">
        <video src={earth} controls autoPlay muted></video>
      </div>
    </div>
  );
}

export default App;
