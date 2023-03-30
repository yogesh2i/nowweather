
import {  useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Soil from "./Components/Soil";


function App() {
  const [item,setItem] = useState("");
  function head(data){
    setItem(data);
    
  }
 
  
  return (
    <>
        
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Header func={head}/>}>

        <Route  index element={item !== "" ? <Main place={item} /> : <Main place={"auto:ip"} />}/>
      
        <Route  path="soil" element={ <Soil/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
