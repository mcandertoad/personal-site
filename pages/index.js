import Head from 'next/head'
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import { siteTitle } from "../src/constants"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      [Here will be a brief summary of who I am]
      <Navigation mainPage />
    </Layout>
  )
}
