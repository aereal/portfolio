import styled from "styled-components"

export const Section = styled.section`
  margin-top: 4rem;

  & ul {
    list-style: none;
  }

  & p {
    margin-top: 1.5rem;
  }

  & h2 {
    line-height: 1.25;
    letter-spacing: -0.1rem;
    font-size: 3.6rem;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 2rem;

    @media (min-width: 550px) {
      & {
        font-size: 4.2rem;
      }
    }
  }
`
