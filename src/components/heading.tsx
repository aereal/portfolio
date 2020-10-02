import React, { FC } from "react"
import styled from "styled-components"
import {
  asHeadingElement,
  useCurrentHeadingLevel,
} from "../contexts/heading-level"
import { SectionEl } from "./section"

const H = styled.h1<{ readonly level: number }>`
  line-height: 1.25;
  letter-spacing: -0.1rem;
  font-size: ${(props) => 1 + 3.65 / props.level}rem;
  font-weight: ${(props) => (props.level <= 3 ? "bold" : "normal")};
  margin-top: 0;
  margin-bottom: 1.5rem;

  ${SectionEl} > &:first-child {
    margin-top: ${(props) => (props.level >= 4 ? -2 : 0)}rem;
  }
`

export const Heading: FC = ({ children }) => {
  const level = useCurrentHeadingLevel()
  return (
    <H as={asHeadingElement(level)} level={level}>
      {children}
    </H>
  )
}
