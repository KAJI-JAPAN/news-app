import { useEffect } from "react"
import { useGetTopNews } from "../../hooks/useGetTopNews"
import { BeforeLoginHeader } from "../organisms/headers/BeforeLoginHeader"

export const Top = () => {
  const { getTopNews, topNews } = useGetTopNews()

  useEffect(() => getTopNews(), [getTopNews])

  return (
    <>
      <BeforeLoginHeader />
      { topNews.map((news) => (
        <div>
          {news.title}
        </div>
        ))
      }
    </>
  )
}