import { useLocation } from "react-router-dom"
import Button from "./Button"
import { mycontext } from "../App"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Cart } from "react-bootstrap-icons"
import '../Css/overview.css';



function OverView(){
   
    
    let navigate=useNavigate()
    let location=useLocation()
    let data=location.state
    
    let [cartitems,setCartitems]=useContext(mycontext)
    let addtocartfun=()=>{
        alert('item added to cart')
        
        setCartitems((cartitems)=>[...cartitems ||[],data])
       
        navigate('/cart')
        
            
    }
   const cartElement = <Cart />
   
    return(
        
        <div className="overview-div">
            <img style={{height:'40vh',width:'30vw'}} src={data.modelimage}/>
            <div>
                <Button name="ADDtoWishlist" />
                 <Button fun={addtocartfun} name="ADDtoCART" imag={cartElement} />
            </div>
            

        </div>
    )
}
export default OverView;