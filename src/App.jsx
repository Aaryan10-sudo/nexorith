import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Project/Home";
import MyRoutes from "./Routes/MyRoutes";
import NavBar from "./Project/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <MyRoutes />
    </>
  );
}

export default App;
