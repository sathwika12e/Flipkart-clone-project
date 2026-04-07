import { Carousel } from "react-bootstrap";
import '../Css/CarouselComponent.css'
import { useState } from "react";
import { useEffect } from "react";
function CarouselComponent({carouselctgname}){
 let [state,setState]=useState([])
 console.log(carouselctgname)
 
  let carouselctg={
    'Laptops':['https://rukminim1.flixcart.com/fk-p-flap/960/460/image/e473dd225e472000.png?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/960/460/image/a34ac81cb15eb3b4.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/960/460/image/5eadbbcd50bc7f6e.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/960/460/image/b521b93ad1f50355.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/960/460/image/900b48ef78c03239.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/960/460/image/b7a47aeafce77388.jpg?q=60'],
      'Mobiles':['https://rukminim2.flixcart.com/fk-p-flap/880/420/image/22845b6b2d564ee9.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/4fc6076910e21634.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/0e27d8cfb01897a7.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/ce11fe34352f0cd6.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/247400a6ca506182.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/8bed0d9cf84c5b9a.jpg?q=60'],
     ' fashion':['https://rukminim2.flixcart.com/fk-p-flap/880/420/image/22845b6b2d564ee9.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/4fc6076910e21634.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/0e27d8cfb01897a7.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/ce11fe34352f0cd6.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/247400a6ca506182.jpg?q=60',
        'https://rukminim1.flixcart.com/fk-p-flap/880/420/image/8bed0d9cf84c5b9a.jpg?q=60']}
        
       useEffect(()=>{
        const selectedimages=carouselctg[carouselctgname]
        console.log("from slectedimages",selectedimages)
        if(selectedimages){
                setState(selectedimages) 
        }
        
       
       },[carouselctgname])
      

    return (
      <div className="carousel-div" style={{ maxWidth: '800px', margin: 'auto', paddingTop: '20px' }}>
      <Carousel  interval={3000} pause="hover" fade>
        
      {
        
      state?.map((eachimg,index)=>{
        return(
      
      
            <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={eachimg}
            alt="First slide"
          /> 
        </Carousel.Item>
       
        )
      }
      )
    
    }
    
      </Carousel>
    </div>

    )
  }
  
export default CarouselComponent;