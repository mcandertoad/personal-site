import Link from 'next/link'
import { Box, Heading, LinkBox, Text } from "@chakra-ui/react"


const Card = ({ title, body, href }) => {
  return (
    <LinkBox
      as={Link}
      href={href}
    >
      <Box
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        cursor="pointer"
        w={["100vw", null, "20em"]}
        h={["calc(100vw/2)", null, "15em"]}
        p={4}
        m={10}
      >
        <Heading
          size="lg"
        >
          {title}
        </Heading>
        <Text
          fontSize="md"
          mt={4}
        >
          {body}
        </Text>
      </Box>
    </LinkBox>
  )
}

export default Card