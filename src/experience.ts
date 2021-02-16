import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import gfm from 'remark-gfm'
import html from 'remark-html'

const experiencesDirectory = path.join(process.cwd(), 'staticContent', 'experiences')

type ExperienceMetadata = {
  startDate: string
  endDate: string
  title: string
  description: string
  abbreviatedTitle: string
}

export const getExperienceIds = () => {
  const fileNames = fs.readdirSync(experiencesDirectory)
  return fileNames.map(fileName => {
    return fileName.replace(/\.md$/, '')
  })
}

export const getSortedExperienceData = () => {
  const fileNames = fs.readdirSync(experiencesDirectory)
  const allExperiencesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(experiencesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data as ExperienceMetadata
    }
  })
  // Sort by date
  return allExperiencesData.sort((a, b) => {
    if (a.startDate < b.startDate) {
      return 1
    } else {
      return -1
    }
  })
}

export const getExperienceData = async (id) => {
  const fullPath = path.join(experiencesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data as ExperienceMetadata
  }
}