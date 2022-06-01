import React from "react"; 
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {'Hola estoy aprendiendo a usar props'}/>
    </>
    
  )
}

export default App;
