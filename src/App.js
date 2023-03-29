
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
        <Route  path="/nowweather/*" element={<><Header func={head}/>  {item !== "" ? <Main place={item} /> : <Main place={"auto:ip"} />}</>}>

        {/* <Route  path="/*" element={item !== "" ? <Main place={item} /> : <Main place={"auto:ip"} />}>
        </Route> */}
        </Route>
        <Route  path="/nowweather/soil" element={<><Header func={head}/> <Soil/></>}></Route>
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
