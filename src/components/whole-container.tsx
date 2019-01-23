import styled from "styled-components"

export const WholeContainer = styled.main`
  max-width: 800px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (min-width: 550px) {
    & {
      width: 80%;
    }
  }

  @media (min-width: 400px) {
    & {
      width: 85%;
      padding: 0;
    }
  }
`
