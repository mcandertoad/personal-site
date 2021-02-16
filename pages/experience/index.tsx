import Link from 'next/link'

import Layout from "../../components/layout"
import Navigation from "../../components/navigation"
import Experience from "../../components/experience"

import { getSortedExperienceData } from "../../src/experience"

export async function getStaticProps() {
  const allExperienceData = getSortedExperienceData()
  return {
    props: {
      allExperienceData
    }
  }
}

export default function ExperiencePage({ allExperienceData }) {
  return (
    <Layout>
      <Navigation />
      [Here is where I will put more detailed copy about myself. This will include a summary of my education and my professional experiences]
      <Experience
        allExperienceData={allExperienceData}
        main
      />
    </Layout>
  )
}