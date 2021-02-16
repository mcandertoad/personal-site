import { useRouter } from 'next/router'
import Card from "./card"
import Reduced from "./reduced"
import styles from "./styles.module.css"

const pages = [
  {
    title: "About Me",
    href: "/aboutMe",
    body: "A little bit about me and my life"
  },
  {
    title: "About this Website",
    href: "/aboutProject",
    body: "Technologies chosen to build this website"
  },
  {
    title: "Experience",
    href: "/experience",
    body: "Professional and Academic experiences"
  },
  {
    title: "Projects",
    href: "/projects",
    body: "Personal side projects"
  }
]
const Navigation = ({ mainPage = false }) => {
  let router = useRouter()

  return (
    <nav>
      {
        mainPage ? (
          <div className={styles.grid}>
            {pages.map(page => (
              <Card
                key={page.href}
                {...page}
              />
            ))}
          </div>
        ) : (
            <div className={styles.banner}>
              {pages.map(page => (
                <Reduced
                  key={page.href}
                  {...page}
                  selected={router.pathname.includes(page.href)}
                />
              ))}
            </div>
          )
      }
    </nav>
  )
}

export default Navigation