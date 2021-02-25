import Link from 'next/link'
import { useRouter } from 'next/router'

const Experience = ({ allExperienceData, main = false }) => {
  let router = useRouter()

  return (
    <>
      {
        main ? (
          <ul>
            {
              allExperienceData.map(({ id, title, description, startDate }, i) => (
                <Link href={`/experience/${id}`} key={id}>
                  <li
                    data-startdate={
                      i === 0 ?
                        "Present" :
                        startDate.split("-")[0]
                    }
                  >
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </li>
                </Link>
              ))
            }
          </ul >
        ) : (
            <ul>
              {
                allExperienceData.map(({ id, abbreviatedTitle, startDate }, i) => (
                  <Link href={`/experience/${id}`} key={id}>
                    <li
                      data-startdate={
                        i === 0 ?
                          "Present" :
                          startDate.split("-")[0]
                      }
                    >
                      <p>{abbreviatedTitle}</p>
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