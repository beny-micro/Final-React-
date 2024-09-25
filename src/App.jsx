import Header from "./components/UI/Header/Header";
import Nav from "./components/UI/Nav/Nav";
import Section from "./components/UI/Section/Section";
import Footer from "./components/UI/Footer/Footer";
import YourText from "./components/UI/YourText/YourText";
import Data from "./components/UI/Data/Data";
import Article from "./components/UI/Article/Article";
import "./App.scss";
import Bord from "./components/UI/Bord/Bord";
import React, { useEffect, useState } from "react";
function App() {
  const [api, setApi] = useState([]);

  useEffect(function () { const fetchData = async () => {
    const response = await fetch('http://localhost:3030/course/1');
    const jsonData = await response.json();

    setApi(jsonData);

console.log(jsonData);
}
fetchData();
}, []);
  return (
    <>
      <Header />
      <Nav />
      <Section api={api} />
      <Bord api={api} />
      <Article api={api} />
      <Data />
      <YourText />
      <Footer />
    </>
  );
}

export default App;
