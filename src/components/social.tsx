import { graphql as gql } from "gatsby"
import React from "react"

import { SocialAccountFragment } from "../types"

export const query = gql`
  fragment SocialAccountFragment on SocialAccountsYaml {
    alt
    url
    service
  }
`

type SocialAccount = Required<SocialAccountFragment.Fragment>

interface Props {
  socialAccounts: ReadonlyArray<SocialAccount>
}

export const SocialSection: React.SFC<Props> = ({ socialAccounts }) => (
  <section id="social">
    <ul>
      {socialAccounts.map(({ url, alt, service }, i) => (
        <li key={i}>
          <a href={url}>
            <img
              className={`icon ${service}`}
              src={`/images/vendor/drawic/${service}.svg`}
              alt={alt}
            />
          </a>
        </li>
      ))}
    </ul>
  </section>
)
