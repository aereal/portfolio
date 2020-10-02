import React, { ComponentProps, FC } from "react"
import styled from "styled-components"
import {
  HeadingLevelContext,
  useNextHeadingLevel,
} from "../contexts/heading-level"

export const SectionEl = styled.section`
  margin-top: 4rem;

  & ul {
    list-style: none;
  }

  & p {
    margin-top: 1.5rem;
  }
`

export const Section: FC<ComponentProps<typeof SectionEl>> = ({
  children,
  ...props
}) => (
  <HeadingLevelContext.Provider value={useNextHeadingLevel()}>
    <SectionEl {...props}>{children}</SectionEl>
  </HeadingLevelContext.Provider>
)
