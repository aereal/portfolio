import React from "react"
import styled from "styled-components"

import { SocialAccountFragment } from "../types"
import { HorizontalList } from "./horizontal-list"
import { Section } from "./section"

const Icon = styled.img<{ color: string }>`
  background-color: ${props => props.color};
  width: 2em;
  height: 2em;
  padding: 0.2em;
  border-radius: 1.2em;
`

type SocialAccount = Required<SocialAccountFragment.Fragment>

interface Props {
  socialAccounts: readonly SocialAccount[]
}

export const SocialSection: React.SFC<Props> = ({ socialAccounts }) => (
  <Section id="social">
    <HorizontalList>
      {socialAccounts.map(({ url, alt, service, color }, i) => (
        <li key={i}>
          <a href={url}>
            <Icon
              color={color!}
              src={`/images/vendor/drawic/${service}.svg`}
              alt={alt}
            />
          </a>
        </li>
      ))}
    </HorizontalList>
  </Section>
)
