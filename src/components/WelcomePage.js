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
// SearchForm took so long that I only got to styling at the very end. I know this is uber-minimal, but it _does_ satisfy the condition for MVP! :P

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
