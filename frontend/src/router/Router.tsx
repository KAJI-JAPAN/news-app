import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Top } from "../components/page/Top";

export const Router: FC= memo(() => {
  return (
    <Routes>
      <Route path="/top" element={<Top />} />
    </Routes>
  )
})