import Navbar from "../components/Navbar";
import React, { useState } from "react";
import PokeCard from "../components/PokeCard";
import image1 from "../images/char.png";
import image2 from "../images/Blast.png";
import image3 from "../images/Bulb.png";
import "./pokemon.css";

function Pokemon() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          paddingBottom: "100px",
          marginBottom: "60px",
        }}
      >
        <Navbar />
        <div
          className='container pokerow'
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "70px",
            marginBottom: "50px",
          }}
        >
          <PokeCard
            name={"Charizard"}
            height={"1.7 m"}
            weight={"90.5 kg"}
            abilities={"Blaze"}
            about={
              "Charizard is a draconic, bipedal Pokémon. its fire will burn hotter as it gains experience. Its fiery breath is ...."
            }
            img={image1}
          />
          <PokeCard
            name={"Blastoise"}
            height={"1.6 m"}
            weight={"85.5 kg"}
            abilities={"Torrent"}
            about={
              "Blastoise is a large, bipedal turtle Pokémon. The powerful cannons on this Pokémon's back ...."
            }
            img={image2}
          />
          <PokeCard
            name={"Bulbasaur"}
            height={"0.7 m"}
            weight={"6.9 kg"}
            abilities={"Overgrow"}
            about={
              "Bulbasaur is a small, quadrupedal amphibian Pokémon. On Bulbasaur's back is a green plant bulb ...."
            }
            img={image3}
          />
        </div>
      </div>
      <h1 style={{ color: "white", marginLeft: "50px" }}>Pokemon</h1>
      <div className='foot' style={{ display: "flex", padding: "50px" }}>
        <div style={{ marginRight: "40px", fontSize: "20px" }}>
          Pokémon is a series of video games developed by Game Freak and
          published by Nintendo and The Pokémon Company under the Pokémon media
          franchise. It was created by Satoshi Tajiri with assistance from Ken
          Sugimori, the first games, Pocket Monsters Red and Green, were
          released in 1996 in Japan for the Game Boy, later released outside of
          Japan as Pokémon Red and Blue. The main series of role-playing video
          games (RPGs), referred as the "core series" by their developers have
          continued on each generation of Nintendo's handhelds. The most
          recently released core series game, Pokémon Scarlet and Violet, was
          released on November 18, 2022, for the Nintendo Switch.
        </div>
        <img
          src='https://cdn.vox-cdn.com/thumbor/LUsqStWnz_wbJCqgBJqUoAVdafw=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/71856361/Ash_Ketchum_World_Champion_Screenshot_4.0.jpg'
          alt=''
          style={{ objectFit: "contain", width: "40vw" }}
        />
      </div>
    </div>
  );
}

export default Pokemon;
