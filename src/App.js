import React from "react"; 
import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {

const onAdd= (count)=>{
  alert(`${count} productos han sido agregados`);

}

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {'Bienvenidxs a mi tienda de objetos con propósito'}/>
      {/* <ItemCount inicial={1} stock={10} onAdd={onAdd}/> */}
      <ItemDetailContainer detalles />
    </>
    
  )
}

export default App;
