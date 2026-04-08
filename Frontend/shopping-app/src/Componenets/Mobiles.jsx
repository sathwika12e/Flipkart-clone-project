import img1 from '../assets/flipkartcarouselimage1.jpeg'
import img2 from '../assets/flipkartcarouselimage2.jpeg'
import img3 from '../assets/flipkartcarouselimage3.jpeg'
import img4 from '../assets/flipkartcarouselimage4.jpeg'
import img5 from '../assets/flipkartcarouselimage5.jpeg'
import img6 from '../assets/flipkartcarouselimage6.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandsTypesDiv from './BrandsTypesDiv'
import AllMobiles from './AllMobiles'
import axios from 'axios'
import CarouselComponent from './CarouselComponent'

import { useState } from 'react'
import { useEffect } from 'react'
function Mobiles(){
     let [branddata,setBranddata]=useState([])
   useEffect(()=>{
    let get_url="https://flipkart-clone-project-2.onrender.com/api/getbrandsdata/"
    axios.get(get_url).then((resp)=>{
        setBranddata(resp.data)

    })


   },[])
 


    
    let brands=branddata.filter((brand)=>
        brand.brandctg.ctgname ==="Mobiles")
    console.log(brands)
   
     let carouselimg=['https://rukminim2.flixcart.com/fk-p-flap/880/420/image/22845b6b2d564ee9.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/4fc6076910e21634.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/0e27d8cfb01897a7.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/ce11fe34352f0cd6.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/247400a6ca506182.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/8bed0d9cf84c5b9a.jpg?q=60',]
        
    return(
       <>
     <CarouselComponent carouselimg={carouselimg} />
     <BrandsTypesDiv brands={brands} />
    
     
     </> 
    )

}
export default Mobiles;