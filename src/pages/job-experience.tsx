import React, { FC } from "react"
import styled from "styled-components"
import { Layout } from "../components/layout"
import { WholeContainer } from "../components/whole-container"
import { Section } from "../components/section"
import { Heading } from "../components/heading"
import { JobEntry } from "../components/job-entry"

const JobExperiencePage: FC = () => (
  <Layout>
    <WholeContainer>
      <Heading level={1}>職務経歴</Heading>
      <Section>
        <Heading level={2}>基本情報</Heading>
        <p>aerealという名前で活動している。本名は中澤亮太 (RYOTA,Nakazawa)。</p>
        <p>
          <time dateTime="1990-08-27">1990年8月27日</time>生まれ。
        </p>
      </Section>
      <Section>
        <Heading level={2}>略歴</Heading>
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
            に正社員として入社 (現)
          </ListItem>
        </List>
      </Section>
      <Section>
        <Heading level={2}>職務経験</Heading>
        <Section>
          <Heading level={3}>ソフトウェアエンジニア</Heading>
          <Section>
            <Heading level={4}>株式会社はてな ブログチーム</Heading>
            <div>
              <time dateTime="2015-12">2015年12月</time>〜現在,{" "}
              <time dateTime="2012-03">2012年3月</time>〜
              <time dateTime="2013-02">2013年2月</time>
            </div>
          </Section>
          <p>
            国内のブログサービスである
            <a href="https://hatenablog.com/">はてなブログ</a>
            の開発チームに所属。
          </p>
          <p>
            <time dateTime="2017-08">2017年8月</time>
            からテックリードとして、ミドルウェアのアップデート戦略やシステムのリアーキテクチャリングの提案と遂行など
            中長期的な視野に立ったエンジニアリングの牽引を務める。
          </p>
          <JobEntry
            title="課金システムのAWS移設およびコンテナワークロードへの移行"
            level={5}
            startDate={{ dateTime: "2019-12", label: "2019年2月" }}
            finishDate={{ dateTime: "2020-01", label: "2020年1月" }}>
            <p>
              立ち上げに携わった課金システムをオンプレミス環境からAWSに移設した。
            </p>
            <p>また、コンテナワークロード (AWS ECS) へ移行した。</p>
          </JobEntry>
          <JobEntry
            title="UGCサービスのリニューアル"
            level={5}
            startDate={{ dateTime: "2018-09", label: "2018年9月" }}
            finishDate={{ dateTime: "2019-11", label: "2019年11月" }}>
            <p>
              ユーザーが言葉の意味を投稿できるサービス「はてなキーワード」の後継である「
              <a href="https://d.hatena.ne.jp/">はてなブログ タグ</a>
              」を開発した。
            </p>
          </JobEntry>
          <JobEntry
            title="独自ドメインのTLS証明書自動プロビジョニングシステムの開発"
            level={5}
            startDate={{ dateTime: "2018-01", label: "2018年1月" }}
            finishDate={{ dateTime: "2018-06", label: "2018年6月" }}>
            <p>
              独自ドメインを持ち込み可能なブログサービスで常時HTTPS接続するため、TLS証明書のオンデマンド発行とTLS終端プロキシ上で動的読み込みするシステムの設計と開発を担当した。
            </p>
          </JobEntry>
          <JobEntry
            title="課金システムとサブスクリプションサービスのリニューアル"
            level={5}
            startDate={{ dateTime: "2016-08", label: "2016年8月" }}
            finishDate={{ dateTime: "2017-07", label: "2017年7月" }}>
            <p>
              はてなブログと決済代行業者の間に立つ課金システムの新規開発と、既存のサブスクリプションメニューを移設・リニューアルするプロジェクトのリーダーを務めた。
            </p>
          </JobEntry>
        </Section>
        <Section>
          <Heading level={3}>マネージャー</Heading>
          <JobEntry
            title="株式会社はてな シニアエンジニア"
            startDate={{ dateTime: "2019-02", label: "2019年2月" }}>
            <p>
              職能組織所属のマネージャーとして、3人程度のメンバーの人事評価やメンタリングを行う。
            </p>
          </JobEntry>
        </Section>
      </Section>
      <Section>
        <Heading level={2}>スキル</Heading>
        <Section>
          <Heading level={3}>TypeScript</Heading>
          <p>
            フロントエンドに<a href="https://flow.org/">Flow</a>
            が導入されていたサービスにTypeScriptを導入、linterやCIなどをセットアップしチームメンバーへの導入を行い移行プロジェクトを開始した
            (現在も進行中)。
          </p>
          <p>
            <a href="https://d.hatena.ne.jp/">新規サービス</a>のフロントエンドに
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
          <Heading level={3}>Go</Heading>
          <p>
            複数のWebアプリケーションをスクラッチから設計・実装する経験あり。
          </p>
          <p>
            独自ドメインのTLS証明書自動プロビジョニングシステムの開発では、TLS終端プロキシに同居し低レイテンシ・低リソース消費が求められるデーモンを開発した。
          </p>
        </Section>
        <Section>
          <Heading level={3}>
            <abbr title="Amazon Web Services">AWS</abbr>
          </Heading>
          <p>
            独自ドメインのTLS証明書自動プロビジョニングシステムの開発では、AWS
            Step Functions, AWS Lambda, AWS
            DynamoDBなどマネージドサービスを活用したシステムの設計を行った経験がある。
          </p>
        </Section>
        <Section>
          <Heading level={3}>Perl</Heading>
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
    </WholeContainer>
  </Layout>
)

const List = styled.ul`
  padding-left: 0;
`

const ListItem = styled.li`
  list-style-type: none;

  &::before {
    content: "-";
    display: inline-block;
    margin-right: 1rem;
  }
`

export default JobExperiencePage
