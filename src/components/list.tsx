import styled from "styled-components"

export const List = styled.ul`
  padding-left: 0;
`

export const ListItem = styled.li`
  list-style-type: none;

  &::before {
    content: "-";
    display: inline-block;
    margin-right: 1rem;
  }
`
