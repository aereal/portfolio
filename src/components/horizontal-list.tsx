import styled from "styled-components"

export const HorizontalList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0;

  & > li {
    float: left;
    text-align: center;
    width: 33%;
  }
`
