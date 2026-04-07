import "../Css/Header.css"
import { useState } from "react";
import { useRef } from "react";
import { Cart,Search,ChevronUp,ChevronDown } from "react-bootstrap-icons";
import Login from './Login'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
function Header(){
    let inputref=useRef();
    let [arrowstate,setArrowstate]=useState(true);
    const[data,setData]=useState([]);
    const[searchText,setSearchText]=useState("");
    const [searchedData, setSearchData] = useState([]);
   useEffect(()=>{
    const get_url="http://127.0.0.1:8000/api/getbrandsmodelsdata/"
   axios.get(get_url).then((resp)=>{
    setData(resp.data)
   });
   },[])
useEffect(()=>{
console.log("searchText",searchText);
const searchFiltedData= data.filter(_data => Object.values(_data).includes(searchText));
 (searchFiltedData).map((i)=>
    console.log('from search',typeof i , Object.values(i),i.length)
 )
    //  (_data.modelname.toLowerCase().includes(searchText.toLowerCase()) || _data.modelbrand.brandname.toLowerCase().includes(searchText.toLowerCase())))
console.log("searchFiltedData", searchFiltedData)
},[searchText])
    return(
        <div className="header" >
            <div className="header-firstdiv">
            <div>
                <p>Flipkart</p>
            </div>
            <div>
                <p>Travel</p>
            </div>
            <p>Location not set <span style={{color:'blue'}}>Select delivery location</span> </p>
        </div>
        <div className="flex-row header-seconddiv">
            
            <input   onChange={(event)=>{console.log("enterd text", event.target.value); setSearchText(event.target.value)}} type="text" placeholder="Search for Products, Brands and More"/>
            <div className="flex-row">
                <Link style={{textDecoration:'none',color:'black'}} to="/login"><p>Login  </p></Link>
                <p onMouseLeave={()=>{setArrowstate(true)}} onMouseEnter={()=>{setArrowstate(false)}}>More {arrowstate?<ChevronUp />:<ChevronDown onClick={()=>{alert('hello')}}/>}</p>
                <p>  <Cart  color="black" size={25}/> Cart</p>
                
            </div>
           
        </div>
        </div>
    )
}
export default Header;