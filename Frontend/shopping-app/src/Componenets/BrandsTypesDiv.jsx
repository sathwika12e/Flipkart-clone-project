import '../Css/BrandsTypesDiv.css'
import { useNavigate } from 'react-router-dom'
import AllMobiles from './AllMobiles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function BrandsTypesDiv({brands}){
    let navigate=useNavigate();
    // let brandClick=(brand)=>{
    // navigate('/allmobiles',{state:brand})
        
    // }
    let [click,setClick]=useState(false)
    let [brand,setBrand]=useState("")
    let brandclick=(brandname)=>{
       
        setBrand(brandname)
        setClick(true)
        console.log('clicked')
    }
    return(
         <>
        <div className='categories-container'>
            {
                
                Array.isArray(brands || [])? brands.map((brand)=>{
                    return(
                    <div onClick={()=>brandclick(brand.brandname)} >
                       <img src={brand?.brandimg}/>
                        <p  >{brand?.brandname}</p>
                    </div>
                   
                    )
                }):""

            }
          

        </div>
  {
                 click ? <AllMobiles brand={brand}/>:""
            }
           
        
       </>
    )
}
export default BrandsTypesDiv;