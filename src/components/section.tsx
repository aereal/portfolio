import React, { FC, ComponentProps } from "react"
import styled from "styled-components"
import { useHeadingLevel, HeadingLevelContext } from "../contexts/heading-level"

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
  <HeadingLevelContext.Provider value={useHeadingLevel() + 1}>
    <SectionEl {...props}>{children}</SectionEl>
  </HeadingLevelContext.Provider>
)
