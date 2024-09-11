import { useState } from "react";
import Home from "./components/home";

function App() {
  const [currentPage, setNewPage] = useState("Home");
  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
