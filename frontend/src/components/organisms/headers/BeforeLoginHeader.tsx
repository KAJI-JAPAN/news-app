import { SearchIcon } from "@chakra-ui/icons"
import { Divider, Flex, Heading, Input, InputGroup, InputRightElement, Link, Stack } from "@chakra-ui/react"
import axios from "axios"
import { FC, memo, useState } from "react"
import { useSearchNews } from "../../../hooks/useSearchNews"

export const BeforeLoginHeader: FC = memo(() => {
  const [ search, setSearch ] = useState("")
  const [ searchNews, setSearchNews ] = useState()
  const { getSearchNews }  = useSearchNews(search)

  const onChangeSearch = (e: any) => setSearch(e.target.value)
  const onClickSearch = () => getSearchNews()

  return (
    <>
    <Flex color="gray.500" p='3' >
      <Heading flexGrow={1}>
        News-App
      </Heading>
      <Stack flexGrow={2} mr={5} maxW="600px">
        <InputGroup w="100%">
          <Input type='text' placeholder="記事を検索する" onChange={onChangeSearch} value={search} />
          <Link href="/searchResult">
          <InputRightElement
            children={<SearchIcon color='gray.500' />}
            onClick={onClickSearch}
            />
          </Link>
        </InputGroup>
      </Stack>
    </Flex>
    <Divider />
  </>
  )
})