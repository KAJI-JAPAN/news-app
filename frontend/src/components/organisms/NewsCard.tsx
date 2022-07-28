import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import { FC, memo } from "react"

type Props = {
  title: string;
  image: string | any;
  description: string;
  url: string;
}


export const NewsCard: FC<Props> = memo((props) => {
  const { title, image, description, url }  = props
  return (
    <Accordion allowToggle>
      <AccordionItem>
          <AccordionButton>
            <Flex>
              <Image
              src={image}
              alt={title}
              boxSize="100px"
              objectFit='cover'
              mx='auto'
            />
            <Text fontSize='xl' pl={3}>{title}</Text>
            </Flex>
          </AccordionButton>
        <AccordionPanel pb={4} color="gray.600">
          {description}
        </AccordionPanel>
        <AccordionPanel pb={4} color="gray.600">
          <Link
            href={url}
            _hover={{ opacity: 0.5, textDecoration: "none" }}
            isExternal
          >
          <Box
            border='1px'
            borderColor='gray.500'
            textAlign="center"
            borderRadius={3}
          >
            VISIT WEBSITE
          </Box>
            </Link>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
})
