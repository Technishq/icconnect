import styled from "styled-components";

// Main Holding Div
export const Container = styled.div`
  /* Jobs Posting Section's Heading */
  .jobs-post h2 {
    color: var(--light-brown);
    font-family: sans-serif;
    font-size: 2.5rem;

    @media screen and (max-width: 420px) {
      font-size: 2rem;
    }
  }

  /* Section Shades */
  .section-gray {
    background-color: #f3f2f0;
  }
  .section-dark-gray {
    background-color: #f1ece5;
  }
`;

// Individal Section Container
export const Section = styled.section`
  padding: 0 1.5rem 2rem;

  @media screen and (max-width: 360px) {
    padding: 0 1rem 2rem 1rem;
  }
`;
