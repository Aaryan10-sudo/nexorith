import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Project/Home";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="project" element={<h1>Project Page</h1>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
