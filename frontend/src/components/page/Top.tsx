import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Image } from "@chakra-ui/react"
import { FC, memo, useEffect } from "react"
import { useGetTopNews } from "../../hooks/useGetTopNews"
import { BeforeLoginHeader } from "../organisms/headers/BeforeLoginHeader"

export const Top: FC = memo(() => {
  const { getTopNews, topNews } = useGetTopNews()

  useEffect(() =>  getTopNews(), [getTopNews])

  return (
    <>
      <BeforeLoginHeader />
      { topNews.map((news) => (
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                      <h2>{news.title}</h2>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex>
                {news.description}
                <Image 
                  src={news.urlToImage}
                  alt={news.title}
                  boxSize="150px"
                  objectFit='cover'
                  mx='auto'
                />
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))
      } 
    </>
  )
})