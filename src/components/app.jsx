import React from "react";
import Cards from "./cards/cards";
import Title from "./title/title";
import { data } from "../data/data";
import './app.css'

function App() {
  return (
  <div className="container">
      <Title />
      <Cards cards = {data} />
    </div>
  )
}

export default App;