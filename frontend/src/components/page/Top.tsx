import { Box, Text } from "@chakra-ui/react"
import { FC, memo, useEffect } from "react"
import { useGetTopNews } from "../../hooks/useGetTopNews"
import { BeforeLoginHeader } from "../organisms/headers/BeforeLoginHeader"
import { TopNews } from "../organisms/TopNews"

export const Top: FC = memo(() => {
  const { getTopNews, topNews } = useGetTopNews()

  useEffect(() =>  getTopNews(), [getTopNews])

  return (
    <>
      <BeforeLoginHeader />
      <Box maxW="800px" mx='auto' py={5}>
      <Text fontSize='3xl' pb={5}>Top News</Text>
      { topNews.map((news) => (
        <TopNews
          title={news.title}
          image={news.urlToImage}
          description={news.description}
          // url={news.url}
        />
      ))
      }
      </Box>
    </>
  )
})