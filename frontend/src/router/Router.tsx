import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { SearchNews } from "../components/page/SearchNews";
import { Top } from "../components/page/Top";

export const Router: FC= memo(() => {
  return (
    <Routes>
      <Route path="/top" element={<Top />} />
      <Route path="/searchResult" element={<SearchNews />} />
    </Routes>
  )
})