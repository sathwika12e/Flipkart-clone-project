import { mycontext } from "../App"
import { useContext } from "react"
import '../Css/cart.css'
import { useState } from "react"
function Cart(){
    let [cartitems,setCartitems]=useContext(mycontext)
    let [state,setState]=useState(true)
   let showcartitems=(each)=>
    
                        
                        
                        <div className="cart-div">
                        <input type="checkbox"/>
                        <div>
                        <div>
                         <img style={{height:'150px',width:"150px"}} src={each.modelimage}/>
                         </div>
                         <div className="details-div">
                         <p>{each.modelname}</p>
                         {/* <p>{each.ramlow}</p> */}
                          </div>
                          <div>
                            <p>10% off {each.pricelow}</p>
                            
                            
                              </div>
                              </div>
                              </div>
                             
                    

   
   
   
    return(
        <>
        <p style={{marginLeft:'3vw'}}>My Cart</p>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <p onClick={()=>setState(true)}className={state?'active':''} >Flipkart</p>
        <p onClick={()=>setState(false)  }className={state?"":'active'}>Grocery</p>
        </div>
        <hr/>
         <div>
            {state?cartitems?.map((each)=>showcartitems(each)):"" }

        </div>
        </>
       
    )
}
export default Cart;