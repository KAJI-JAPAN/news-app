import { Divider, Flex, Heading } from "@chakra-ui/react"
import { FC, memo } from "react"

export const BeforeLoginHeader: FC = memo(() => {
  return (
    <>
    <Flex color="gray.500" p='3' >
      <Heading>
        News-App
      </Heading>
    </Flex>
    <Divider />
  </>
  )
})