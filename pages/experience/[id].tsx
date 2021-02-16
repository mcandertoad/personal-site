import Head from 'next/head'

import Layout from '../../components/layout'
import Experience from '../../components/experience'
import Navigation from "../../components/navigation"

import { getExperienceIds, getExperienceData, getSortedExperienceData } from '../../src/experience'
import utilStyles from "../../styles/utils.module.css"
import styles from "../../styles/experience.module.css"

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
      <div
        className={styles.articleWrapper}
      >
        <aside>
          <Experience
            allExperienceData={allExperienceData}
          />
        </aside>
        <article
          className={styles.article}
        >
          <h1 className={utilStyles.headingXl}>{experienceData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: experienceData.contentHtml }} />
        </article>
      </div>
    </Layout>
  )
}
