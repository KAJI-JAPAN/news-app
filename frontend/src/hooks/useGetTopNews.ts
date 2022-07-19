import { AllNews, Article } from './../types/AllNews';
import  axios  from 'axios';
import { useCallback, useState } from 'react';

export const useGetTopNews = () => {
  const [ topNews, setTopNews] = useState<Article[]>([])

  const getTopNews = useCallback(() => {
    axios.get<AllNews>(`https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.REACT_APP_NEWS_API}`)
    .then((res) => {
      setTopNews(res.data.articles)
    })
  }, [])
  return { getTopNews, topNews }
}