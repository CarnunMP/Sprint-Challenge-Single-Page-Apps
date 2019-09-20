import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SearchForm() {
 
  return (
    <section className="search-form">
      <Formik 
        initialValues={{search: ""}}
        onSubmit={(formValues, actions) => console.log(formValues.search)}
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
