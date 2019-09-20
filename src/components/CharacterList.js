import React, { useEffect, useState } from "react";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  // useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  const {characters} = props;

  return (
    <section className="character-list">
      {
        characters.map(character => (
          <div className="character" key={character.id}>
            <h2>Name: {character.name}</h2>
            <h3>Species: {character.species}</h3>
            <h3>Status: {character.status}</h3>
          </div>
        ))
      }
    </section>
  );
}
