import { useRouter } from 'next/router'
import { Flex } from "@chakra-ui/react"
import Card from "../Card"
import Reduced from "./reduced"

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
          <Flex
            flexWrap="wrap"
          >
            {pages.map(page => (
              <Card
                key={page.href}
                {...page}
              />
            ))}
          </Flex>
        ) : (
            <div>
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