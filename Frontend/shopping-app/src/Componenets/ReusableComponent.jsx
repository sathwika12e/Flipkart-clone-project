 import 'bootstrap/dist/css/bootstrap.min.css';
import BrandsTypesDiv from './BrandsTypesDiv'
import AllMobiles from './AllMobiles'
import axios from 'axios'
import CarouselComponent from './CarouselComponent'

import { useState } from 'react'
import { useEffect } from 'react'
function ReusableComponent({category}){
   

     let [branddata,setBranddata]=useState([])
   useEffect(()=>{
    let get_url="http://127.0.0.1:8000/api/getbrandsdata/"
    axios.get(get_url).then((resp)=>{
        setBranddata(resp.data)

    })


   },[])
 


    
    let brands=branddata.filter((brand)=>
        brand.brandctg.ctgname ==category)
    console.log(brands)
   
     
        
    return(
       <>
     <CarouselComponent carouselctgname={category} />
     <BrandsTypesDiv brands={brands} />
    <h1>from {category} reusable component</h1>
     
     </> 
 

    )
}
export default ReusableComponent;