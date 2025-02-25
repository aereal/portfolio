import { FC } from "react"
import styled from "styled-components"
import { Heading } from "../components/heading"
import { Section } from "../components/section"
import { Profile as ProfileModel } from "../model"

interface ProfileProps {
  readonly profile: ProfileModel
}

export const Profile: FC<ProfileProps> = ({ profile }) => (
  <Section>
    <Heading>基本情報</Heading>
    <Container>
      <Figure>
        <Img
          src={profile.fields.profileImage.fields.file.url}
          alt={profile.fields.profileImage.fields.title}
        />
        <Caption>近影</Caption>
        <LicenseFooter>
          Original archived in{" "}
          <a href="https://photos.google.com/share/AF1QipPCVWlDbsbfy1QLt-ULcpUsM7LhVmZNx7M23z15-8HHTp0bKcC1PhMTh2C6cJxXWg?key=UHAwU2x4TWlibm1jNF9aeVlIVjFMN05LQlF6MGRn">
            builderscon tokyo 2019 スピーカーディナー
          </a>{" "}
          by builderscon licensed under{" "}
          <a
            rel="license"
            href="https://creativecommons.org/licenses/by-nc/4.0/deed">
            CC-BY-NC 4.0
          </a>
        </LicenseFooter>
      </Figure>
      <Description>
        <p>aerealという名前で活動している。本名は中澤亮太 (RYOTA,Nakazawa)。</p>
        <p>
          <time dateTime="1990-08-27">1990年8月27日</time>
          生まれ。北海道旭川市出身、京都府京都市在住。
        </p>
      </Description>
    </Container>
  </Section>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 550px) {
    flex-direction: row;
  }
`

const Description = styled.div`
  @media (min-width: 550px) {
    order: 1;
  }
`

const Figure = styled.figure`
  @media (min-width: 550px) {
    order: 2;
    width: 50%;
  }

  margin: 0;
  width: 100%;
`

const Img = styled.img`
  max-width: 100%;
`

const LicenseFooter = styled.footer`
  font-size: 1.4rem;
  color: #777;
  text-align: right;
`

const Caption = styled.figcaption`
  font-style: italic;
  text-align: right;
`
