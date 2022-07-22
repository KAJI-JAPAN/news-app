import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Image, Text } from "@chakra-ui/react"
import { FC, memo } from "react"

type Props = {
  title: string;
  image: string;
  description: string
}

export const TopNews: FC<Props> = memo((props) => {
  const { title, image, description }  = props
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
      </AccordionItem>
    </Accordion>
  )
})
