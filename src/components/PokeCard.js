import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./pokecard.css";

function PokeCard({ name, height, weight, about, abilities, img }) {
  const [flip, setFlip] = useState(false);
  return (
    <div>
      <ReactCardFlip isFlipped={flip} flipDirection='horizontal'>
        <div className='cardfront' onClick={() => setFlip(!flip)}>
          <img
            src={require("../images/poke.png")}
            style={{
              objectFit: "contain",
              height: "350px",
              display: "flex",
              marginTop: "100px",
            }}
          />
        </div>
        <div className='cardback' onClick={() => setFlip(!flip)}>
          <img
            src={img}
            style={{
              objectFit: "contain",
              height: "350px",
              marginLeft: "-7px",
            }}
          />

          <center
            style={{ fontFamily: "inter", fontweight: "600", fontSize: "25px" }}
          >
            {name}
          </center>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#8A2E2E",
                border: "solid",
                marginRight: "20px",
                padding: "1px 15px",
                color: "#FF4747",
                borderRadius: "10px",
              }}
            >
              Fire
            </div>
            <div
              style={{
                backgroundColor: "#5F6489",
                border: "solid",
                padding: "1px 15px",
                color: "#ABB3FF",
                borderRadius: "10px",
              }}
            >
              Flying
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "25px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "0.5",
                marginLeft: "50px",
                borderStyle: "solid",
                borderWidth: "0px 0.4px 0px 0px",
              }}
            >
              <div className='fadetext' style={{ marginTop: "25px" }}>
                <p>Height {height}</p>
                <p>Weight {weight}</p>
                <p>Abilities {abilities}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "0.5",
                marginRight: "50px",
                marginLeft: "30px",
              }}
            >
              <b style={{ fontSize: "20px" }}>About</b>
              <p className='fadetext'>{about}</p>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default PokeCard;
