import React from "react"
import styled from "styled-components"

import { Section } from "./section"

const H1 = styled.h1`
  line-height: 1.2;
  letter-spacing: -0.1rem;
  margin: 0.67em 0;
  margin-top: 0;
  font-size: 4rem;
  margin-bottom: -2rem;
  font-weight: 300;

  @media (min-width: 550px) {
    & {
      font-size: 5rem;
    }
  }
`

export const SelfSection: React.FC<{}> = () => (
  <>
    <H1 itemProp="name">aereal</H1>
    <Section id="self">
      <div className="description">
        <p>
          Developer of music, photography, or web app based on{" "}
          <span
            itemProp="address"
            itemType="http://schema.org/PostalAddress"
            itemScope={true}>
            <span itemProp="addressRegion">Kyoto</span>
          </span>
          .
        </p>
      </div>
      <img
        src="https://avatars3.githubusercontent.com/u/87649?s=230"
        alt="aereal"
        itemProp="avatar"
      />
    </Section>
  </>
)
