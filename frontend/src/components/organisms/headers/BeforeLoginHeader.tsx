import { SearchIcon } from "@chakra-ui/icons"
import {  Divider, Flex, Heading, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react"
import { FC, memo, useState } from "react"

export const BeforeLoginHeader: FC = memo(() => {
  const [ search, setSearch ] = useState("")

  const onChangeSearch = (e: any) => setSearch(e.target.value)
  return (
    <>
    <Flex color="gray.500" p='3' >
      <Heading flexGrow={1}>
        News-App
      </Heading> 

      <Stack flexGrow={2} mr={5} maxW="600px">
        <InputGroup w="100%">
          <Input type='text' placeholder="記事を検索する" onChange={onChangeSearch} value={search} />
          <InputRightElement
            children={<SearchIcon color='gray.500' />}
          />
        </InputGroup>
      </Stack>

    </Flex>
    <Divider />
  </>
  )
})