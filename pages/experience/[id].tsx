import Head from 'next/head'

import Layout from '../../components/Layout'
import Experience from '../../components/Experience'
import Navigation from "../../components/navigation"

import { getExperienceIds, getExperienceData, getSortedExperienceData } from '../../src/experience'

export async function getStaticPaths() {
  const paths = getExperienceIds().map(id => ({
    params: {
      id
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const experienceData = await getExperienceData(params.id)
  const allExperienceData = getSortedExperienceData()
  return {
    props: {
      experienceData,
      allExperienceData
    }
  }
}

export default function Post({ experienceData, allExperienceData }) {
  return (
    <Layout>
      <Head>
        <title>{experienceData.title}</title>
      </Head>
      <Navigation />
      <div>
        <aside>
          <Experience
            allExperienceData={allExperienceData}
          />
        </aside>
        <article>
          <h1>{experienceData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: experienceData.contentHtml }} />
        </article>
      </div>
    </Layout>
  )
}
