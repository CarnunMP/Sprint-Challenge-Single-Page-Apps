import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [attributeMatrix, setAttributeMatrix] = useState({});

  useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        debugger
      })
  }, []);

  useEffect(() => {
    const relevantAttributes = ["name", "species", "gender", "status"];
    let attributeMatrixObject = {}

    if (characters != []) {
      characters.forEach(character => {
        relevantAttributes.forEach(attribute => {
          if (attributeMatrixObject[character[attribute]] === undefined) {
            attributeMatrixObject = {...attributeMatrixObject, [character[attribute]]: [character]};
          } else {
            attributeMatrixObject = {...attributeMatrixObject, [character[attribute]]: attributeMatrixObject[character[attribute]].concat([character])};
          }
        })
      })

      setAttributeMatrix(attributeMatrixObject);
    }
  }, [characters]);

  return (
    <>
      <SearchForm characters={characters} attributeMatrix={attributeMatrix}/>
      <section className="character-list">
        {
          characters.map(character => (
            <div className="character" key={character.id}>
              <h2>Name: {character.name}</h2>
              <h3>Species: {character.species}</h3>
              <h3>Gender: {character.gender}</h3>
              <h3>Status: {character.status}</h3>
            </div>
          ))
        }
      </section>
      <Link to="/">Home</Link>
    </>
  );
}
