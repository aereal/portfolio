import React from "react"

interface SocialAccount {
  alt: string
  url: string
  serviceClass: string
}

interface Props {
  socialAccounts: ReadonlyArray<SocialAccount>
}

export const SocialSection: React.SFC<Props> = ({ socialAccounts }) => (
  <section id="social">
    <ul>
      {socialAccounts.map(({ url, alt, serviceClass }, i) => (
        <li key={i}>
          <a href={url}>
            <img
              className={`icon ${serviceClass}`}
              src={`/images/vendor/drawic/${serviceClass}.svg`}
              alt={alt}
            />
          </a>
        </li>
      ))}
    </ul>
  </section>
)
