import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { UniteRoute } from "./UniteRoute";

export const Router: FC= memo(() => {
  return (
    <Routes>
      { UniteRoute.map((route) => (
        <Route path={route.path} element={route.children} />
      ))
    }
    </Routes>
  )
})