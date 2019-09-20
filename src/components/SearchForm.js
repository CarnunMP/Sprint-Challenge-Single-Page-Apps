import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SearchForm(props) {
  const {characters, attributeMatrix} = props;
  const [searchResults, setSearchResults] = useState([]);

  const onSubmit = (formValues, actions) => {
    const searchInput = formValues.search;
    // if (searchInput != "") {
    //   if (searchInput === "male" || searchInput === "Male") {
    //     setSearchResults(characters.filter(character => character.gender === "Male"))
    //   } else if (searchInput === "female" || searchInput === "Female") {
    //     setSearchResults(characters.filter(character => character.gender === "Female"))
    //   } else if (searchInput === "unknown" || searchInput === "Unknown") {
    //     setSearchResults(characters.filter(character => character.gender === "unknown"))
    //   }
    // }
    
    // I thought, _there must be a better way..._! So:

    const resultsArray = [];
    for (let attribute in attributeMatrix) {
      if (searchInput.toLowerCase() === attribute.toLowerCase()) {
        resultsArray.push(attributeMatrix[attribute]);
      }
    }

    setSearchResults(resultsArray);
    console.log(resultsArray); // Console-logging just to show that it works! Didn't have time to implement fully, unfortunately.
    actions.resetForm();
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
