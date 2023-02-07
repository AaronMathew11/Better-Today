import React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./card.css";

function Card() {
  const [flip, setFlip] = useState(false);

  return (
    <ReactCardFlip isFlipped={flip} flipDirection='horizontal'>
      <div className='card card1' onClick={() => setFlip(!flip)}>
        <img
          src={require("../images/logo.png")}
          style={{
            objectFit: "contain",
            height: "40px",
            position: "absolute",
            margin: "10px",
          }}
        />
        <div>
          <span className='header'>
            <p className='green'>Earth </p>
            <p className='black'>Day</p>
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-20px",
            }}
          >
            <p className='black'>
              <span>Mission_</span>
            </p>
            <div className='inter black'>
              Go-<p className='green'>green</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p
            style={{
              fontSize: "23px",
              color: "black",
              fontFamily: "inter",
              fontWeight: "500",
            }}
          >
            1500+
          </p>
          <br />
          <div style={{ marginTop: "-45px" }}>
            {" "}
            <p
              style={{
                color: "#3E7F6D",
                fontFamily: "inter",
                fontWeight: 500,
                display: "inline",
              }}
            >
              Trees
            </p>
            <p
              style={{
                fontFamily: "inter",
                fontWeight: 500,
                display: "inline",
                color: "black",
              }}
            >
              {" "}
              planted
            </p>{" "}
          </div>
        </div>
        <img
          src={require("../images/earth.png")}
          style={{
            position: "absolute",
            bottom: "0px",
            objectFit: "contain",
            width: "350px",
          }}
        />
        <div
          className='overlay'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../images/Vector.png")}
            style={{
              objectFit: "contain",
              width: "40px",
              marginTop: "-80px",
            }}
          />
          <p
            style={{
              fontFamily: "inter",
              fontWeight: "500",
              marginTop: "20px",
              color:"white"
            }}
          >
            Click to Know more about
          </p>
          <span style={{ display: "inline" }}>
            Mission
            <p
              style={{
                fontFamily: "inter",
                fontWeight: "700",
                display: "inline",
                color:"white"
              }}
            >
              Go-green
            </p>
          </span>
        </div>
      </div>
      <div className='card' onClick={() => setFlip(!flip)}>
        <img
          src={require("../images/logo.png")}
          style={{
            objectFit: "contain",
            height: "40px",
            position: "absolute",
            margin: "10px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <div>
            <p className='black'>
              <span>Mission_</span>
            </p>
            <div className='inter black'>
              Go-<p className='green'>green</p>
            </div>
          </div>
          <img
            src={require("../images/call.png")}
            style={{
              objectFit: "contain",
              height: "170px",
              marginTop: "60px",
              marginLeft: "30px",
            }}
          />
        </div>

        <img
          src={require("../images/planting.png")}
          style={{
            position: "absolute",
            bottom: "0px",
            objectFit: "contain",
            width: "350px",
          }}
        />
      </div>
    </ReactCardFlip>
  );
}

export default Card;
