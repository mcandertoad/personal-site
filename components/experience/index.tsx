import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from "./styles.module.css"

const Experience = ({ allExperienceData, main = false }) => {
  let router = useRouter()

  return (
    <>
      {
        main ? (
          <ul
            className={styles.experienceList}
          >
            {
              allExperienceData.map(({ id, title, description, startDate }, i) => (
                <Link href={`/experience/${id}`} key={id}>
                  <li
                    className={styles.experienceItem}
                    data-startdate={
                      i === 0 ?
                        "Present" :
                        startDate.split("-")[0]
                    }
                  >
                    <h2 className={styles.experienceText}>{title}</h2>
                    <p className={styles.experienceDescription}>{description}</p>
                  </li>
                </Link>
              ))
            }
          </ul >
        ) : (
            <ul
              className={styles.minExperienceList}
            >
              {
                allExperienceData.map(({ id, abbreviatedTitle, startDate }, i) => (
                  <Link href={`/experience/${id}`} key={id}>
                    <li
                      className={router.asPath.includes(id) ? styles.minExperienceItemSelected : styles.minExperienceItem}
                      data-startdate={
                        i === 0 ?
                          "Present" :
                          startDate.split("-")[0]
                      }
                    >
                      <p className={styles.minExperienceText}>{abbreviatedTitle}</p>
                    </li>
                  </Link>
                ))
              }
            </ul >
          )
      }
    </>
  )
}

export default Experience