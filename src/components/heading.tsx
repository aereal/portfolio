import React, { FC } from "react"
import styled from "styled-components"
import { Section } from "./section"

const H = styled.h1<{ readonly level: HeadingLevel }>`
  line-height: 1.25;
  letter-spacing: -0.1rem;
  font-size: ${props => 1 + 3.65 / props.level}rem;
  font-weight: ${props => (props.level <= 3 ? "bold" : "normal")};
  margin-top: 0;
  margin-bottom: 1.5rem;

  ${Section} > &:first-child {
    margin-top: ${props => (props.level >= 4 ? -2 : 0)}rem;
  }
`

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps {
  readonly level: HeadingLevel
}

export const Heading: FC<HeadingProps> = ({ level, children }) => (
  <H as={`h${level}` as any} level={level}>
    {children}
  </H>
)
