import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ex01 from "../pages/Ex01";
import Ex02 from "../pages/Ex02";
import Ex03 from "../pages/Ex03";
import Ex04 from "../pages/Ex04";
import Ex05 from "../pages/Ex05";
import Ex06 from "../pages/Ex06";
import Ex07 from "../pages/Ex07";
import Ex08 from "../pages/Ex08";
import Ex09 from "../pages/Ex09";
import Ex10 from "../pages/Ex10";
import Ex11 from "../pages/Ex11";
import Ex12 from "../pages/Ex12";
import Ex13 from "../pages/Ex13";
import Ex14 from "../pages/Ex14";
import Ex15 from "../pages/Ex15";
import Ex16 from "../pages/Ex16";

import { PageContainer } from "../components/PageContainer";

export default function AppRoutes() {
  const pages = [
    { path: "/ex01", element: Ex01 },
    { path: "/ex02", element: Ex02 },
    { path: "/ex03", element: Ex03 },
    { path: "/ex04", element: Ex04 },
    { path: "/ex05", element: Ex05 },
    { path: "/ex06", element: Ex06 },
    { path: "/ex07", element: Ex07 },
    { path: "/ex08", element: Ex08 },
    { path: "/ex09", element: Ex09 },
    { path: "/ex10", element: Ex10 },
    { path: "/ex11", element: Ex11 },
    { path: "/ex12", element: Ex12 },
    { path: "/ex13", element: Ex13 },
    { path: "/ex14", element: Ex14 },
    { path: "/ex15", element: Ex15 },
    { path: "/ex16", element: Ex16 },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {pages.map((page, i) => (
          <Route
            key={i}
            path={page.path}
            element={<PageContainer main={page.element} />}
          />
        ))}
        <Route path="*" element={<Ex01 />} />
      </Routes>
    </BrowserRouter>
  );
}
