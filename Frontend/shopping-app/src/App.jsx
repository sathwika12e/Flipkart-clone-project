import { useState } from "react";

import "./App.css";

import Header from "./Componenets/Header";
import Mainpage from "./Componenets/Mainpage";
import Categories from "./Componenets/Categories";

import { createContext } from "react";



export let mycontext = createContext();
function App() {
  let [cartitems, setCartitems] = useState([]);
  return (
    <>
      <mycontext.Provider  value={[cartitems,setCartitems]}>
      {/* <Provider store={testStore}> */}
        <Header />
        <Categories />

        <Mainpage />
      {/* </Provider> */}
      </mycontext.Provider>
    </>
  );
}
export default App;
