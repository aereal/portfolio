import { GetStaticProps } from "next"
import Head from "next/head"
import { FC } from "react"
import { Heading } from "../components/heading"
import { JobPosition } from "../components/job-position"
import { Layout } from "../components/layout"
import { List, ListItem } from "../components/list"
import { Profile } from "../components/profile"
import { Section } from "../components/section"
import { WholeContainer } from "../components/whole-container"
import { fetchEntries } from "../fetch-entries"
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
              フリーランスとして独立、
              <a href="https://corp.classi.jp">Classi株式会社</a>に参画
            </ListItem>
            <ListItem>
              <time dateTime="2021-04">2021年4月</time>{" "}
              Classi株式会社に正社員として入社
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
            <Heading>Go</Heading>
            <p>
              複数のWebアプリケーションをスクラッチから設計・実装する経験あり。
            </p>
            <p>
              独自ドメインのTLS証明書自動プロビジョニングシステムの開発では、TLS終端プロキシに同居し低レイテンシ・低リソース消費が求められるデーモンを開発した。
            </p>
            <p>
              <a href="https://github.com/kayac/ecspresso">ecspresso</a>
              などのOSSへ貢献するほか、自作のツールやライブラリを開発、所属企業への導入実績あり。
            </p>
            <List>
              <ListItem>
                <a href="https://github.com/aereal/otelgqlgen">otelgqlgen</a> -{" "}
                <a href="https://github.com/99designs/gqlgen">gqlgen</a>
                の拡張として働き
                <a href="https://opentelemetry.io">OpenTelemetry</a>
                のトレースを収集・送信する
              </ListItem>
              <ListItem>
                <a href="https://github.com/aereal/nagaya">nagaya</a> -
                マルチテナントDBに対しRubyのapartmentのようにリクエストごとに接続するテナントDBを切り替えるライブラリ
              </ListItem>
            </List>
          </Section>
          <Section>
            <Heading>
              <a href="https://opentelemetry.io">OpenTelemetry</a>
            </Heading>
            <p>
              担当サービスの監視フレームワークをDatadog
              APMから移行し本番導入したほか、CollectorをカスタムビルドしてAWS
              Lambdaの拡張として動作する方法について発信している。
            </p>
            <List>
              <ListItem>
                <a href="https://tech.classi.jp/entry/own-built-otel-collector-lambda-extension">
                  Lambda Extensionと自家版OpenTelemetry Collector -
                  Classi開発者ブログ
                </a>
              </ListItem>
              <ListItem>
                <a href="https://tech.classi.jp/entry/opentelemetry-migration">
                  実践OpenTelemetry - Classi開発者ブログ
                </a>
              </ListItem>
            </List>
            <p>
              またコミュニティイベントであるOpenTelemetry Meetup
              2024-06にて登壇経験あり。
            </p>
            <List>
              <ListItem>
                <a href="https://speakerdeck.com/aereal/how-to-send-distibuted-traces-to-datadog-using-build-own-opentelemetry-lambda-distribution">
                  How to send distibuted traces to Datadog using build own
                  OpenTelemetry-Lambda distribution - Speaker Deck
                </a>
              </ListItem>
            </List>
          </Section>
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
