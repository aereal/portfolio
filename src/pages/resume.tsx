import React, { FC } from "react"
import Head from "next/head"
import { GetStaticProps } from "next"
import { fetchEntries } from "../fetch-entries"
import { Layout } from "../components/layout"
import { WholeContainer } from "../components/whole-container"
import { Section } from "../components/section"
import { Heading } from "../components/heading"
import { Profile } from "../components/profile"
import { ListItem, List } from "../components/list"
import { JobPosition } from "../components/job-position"
import {
  JobPosition as JobPositionModel,
  Profile as ProfileModel,
} from "../model"

interface ResumePageProps {
  readonly jobPositions: JobPositionModel[]
  readonly profile: ProfileModel
}

export const getStaticProps: GetStaticProps<ResumePageProps> = async () => {
  const { jobPositions, profile } = await fetchEntries()
  if (!profile) {
    throw new Error("profile not found")
  }
  return {
    props: { jobPositions, profile },
  }
}

const ResumePage: FC<ResumePageProps> = ({ jobPositions, profile }) => (
  <>
    <Head>
      <title>Resume - aereal</title>
    </Head>
    <Layout>
      <WholeContainer>
        <Heading>職務経歴</Heading>
        <Profile profile={profile} />
        <Section>
          <Heading>略歴</Heading>
          <List>
            <ListItem>
              <time dateTime="2011-04">2011年4月</time> 追手門学院大学
              心理学部心理学科 入学
            </ListItem>
            <ListItem>
              <time dateTime="2012-03">2012年3月</time>{" "}
              <a href="https://hatenacorp.jp/">株式会社はてな</a>
              にアルバイトとして入社
            </ListItem>
            <ListItem>
              <time dateTime="2012-04">2012年4月</time> 同大学 中退
            </ListItem>
            <ListItem>
              <time dateTime="2012-09">2012年9月</time> 株式会社はてな
              に正社員として入社
            </ListItem>
            <ListItem>
              <time dateTime="2020-08">2020年8月</time> 同社を退職。
              フリーランスとして独立
            </ListItem>
          </List>
        </Section>
        <Section>
          <Heading>職務経験</Heading>
          {jobPositions.map((jobPosition) => (
            <JobPosition jobPosition={jobPosition} key={jobPosition.sys.id} />
          ))}
        </Section>
        <Section>
          <Heading>スキル</Heading>
          <Section>
            <Heading>TypeScript</Heading>
            <p>
              フロントエンドに<a href="https://flow.org/">Flow</a>
              が導入されていたサービスにTypeScriptを導入、linterやCIなどをセットアップしチームメンバーへの導入を行い移行プロジェクトを開始した
              (現在も進行中)。
            </p>
            <p>
              <a href="https://d.hatena.ne.jp/">新規サービス</a>
              のフロントエンドに
              <a href="https://reactjs.org/">React</a>
              と共に導入、設計から実装の大半を担当した。
            </p>
            <p>
              クラウドリソースのモデル化とプロビジョニングを行うフレームワークである
              <a href="https://aws.amazon.com/cdk/">AWS CDK</a>
              の言語としてTypeScriptを採用、AWS
              CloudFormationを置き換えるほか、社内外で再利用可能なライブラリを開発・メンテナンスしている。
            </p>
            <List>
              <ListItem>
                <a href="https://github.com/aereal/cdk-ecs-task-retirement-events-mackerel-annotator">
                  cdk-ecs-task-retirment-events-mackerel-annotator
                </a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/aereal/cdk-mackerel-container-agent">
                  cdk-mackerel-container-agent
                </a>
              </ListItem>
            </List>
          </Section>
          <Section>
            <Heading>Go</Heading>
            <p>
              複数のWebアプリケーションをスクラッチから設計・実装する経験あり。
            </p>
            <p>
              独自ドメインのTLS証明書自動プロビジョニングシステムの開発では、TLS終端プロキシに同居し低レイテンシ・低リソース消費が求められるデーモンを開発した。
            </p>
          </Section>
          <Section>
            <Heading>
              <abbr title="Amazon Web Services">AWS</abbr>
            </Heading>
            <p>
              独自ドメインのTLS証明書自動プロビジョニングシステムの開発では、AWS
              Step Functions, AWS Lambda, AWS
              DynamoDBなどマネージドサービスを活用したシステムの設計を行った経験がある。
            </p>
          </Section>
          <Section>
            <Heading>Perl</Heading>
            <p>一般的なWebサービスのサーバーサイドとして開発の経験多数。</p>
            <p>いくつかのCPANモジュールも作った。</p>
            <List>
              <ListItem>
                <a href="https://github.com/aereal/Text-Xslate-AST-Walker">
                  Text::Xslate::AST::Walker
                </a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/aereal/Template-Context-SourceMap">
                  Template::Context::SourceMap
                </a>
              </ListItem>
            </List>
          </Section>
        </Section>
        <Section>
          <Heading>賞罰</Heading>
          <List>
            <ListItem>
              <time dateTime="2018-12">2018年12月</time>
              <a href="https://diary2.mirakui.com/entry/2018/12/31/211047">
                mirakui版ツイートオブザイヤー2018
              </a>
              受賞
            </ListItem>
          </List>
        </Section>
      </WholeContainer>
    </Layout>
  </>
)

export default ResumePage
