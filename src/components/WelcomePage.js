import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledWelcomeSection = styled.section`
  text-align: center;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default function WelcomePage() {
  return (
    <StyledWelcomeSection className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </div>
      </header>
      <Link to="/characters/">Characters</Link>
    </StyledWelcomeSection>
  );
}
