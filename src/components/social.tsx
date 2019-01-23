import { graphql as gql, withPrefix } from "gatsby"
import React from "react"
import styled from "styled-components"

import { SocialAccountFragment } from "../types"
import { HorizontalList } from "./horizontal-list"
import { Section } from "./section"

export const query = gql`
  fragment SocialAccountFragment on SocialAccountsYaml {
    alt
    url
    service
    color
  }
`

const Icon = styled.img<{ color: string }>`
  background-color: ${props => props.color};
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  border-radius: 1.2rem;
`

type SocialAccount = Required<SocialAccountFragment.Fragment>

interface Props {
  socialAccounts: ReadonlyArray<SocialAccount>
}

export const SocialSection: React.SFC<Props> = ({ socialAccounts }) => (
  <Section id="social">
    <HorizontalList>
      {socialAccounts.map(({ url, alt, service, color }, i) => (
        <li key={i}>
          <a href={url}>
            <Icon
              color={color!}
              src={withPrefix(`/images/vendor/drawic/${service}.svg`)}
              alt={alt}
            />
          </a>
        </li>
      ))}
    </HorizontalList>
  </Section>
)
