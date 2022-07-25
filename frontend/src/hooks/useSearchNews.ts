import { useMessage } from './useMessage';
import { memo, useState } from 'react';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';


export const useSearchNews = (props: any) => {
  const { search } = props
  const  navigation = useNavigate()

  const { showMessage } = useMessage()
  const [ searchNews, setSearchNews ] = useState()
  const getSearchNews = () => {
    axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_NEWS_API}`)
    .then((res) => {
      setSearchNews(res.data.articles)
      navigation('/searchNews')
    })
    .catch(() => (
      showMessage()
    ))
  }

  return { getSearchNews, searchNews }
}