import { AllNews, Article } from './../types/AllNews';
import  axios  from 'axios';
import { useState } from 'react';

export const useGetTopNews = () => {
  const [ topNews, setTopNews] = useState<Article[]>([])

  const getTopNews = () => {
    axios.get<AllNews>('https://newsapi.org/v2/top-headlines?country=us&apiKey=c1ab40bdb9f94aefb3d63dcc6a952a7d')
    .then((res) => {
      setTopNews(res.data.articles)
    })
  }
  return { getTopNews, topNews }
}