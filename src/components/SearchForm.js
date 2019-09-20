import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SearchForm(props) {
  const {characters} = props;
  const [searchResults, setSearchResults] = useState([]);

  const onSubmit = (formValues, actions) => {
    const searchInput = formValues.search;
    
    if (searchInput != "") {
      if (searchInput === "male" || searchInput === "Male") {
        setSearchResults(characters.filter(character => character.gender === "Male"))
      } else if (searchInput === "female" || searchInput === "Female") {
        setSearchResults(characters.filter(character => character.gender === "Female"))
      } else if (searchInput === "unknown" || searchInput === "Unknown") {
        setSearchResults(characters.filter(character => character.gender === "unknown"))
      }
    }

    console.log(searchResults);
  }

  return (
    <section className="search-form">
      <Formik 
        initialValues={{search: ""}}
        onSubmit={onSubmit}
        render={props => {
          return (
            <Form>
              <Field name="search" type="text" placeholder="Search Characters" />
              <button type="submit">Go</button>
            </Form>
          )
        }}
      />
    </section>
  );
}
