import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from "axios";


export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        debugger
      })
  }, [])

  console.log(characters);

  return (
    <main>
      <Header />
    </main>
  );
}
