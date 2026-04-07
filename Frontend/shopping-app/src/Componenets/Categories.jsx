import '../Css/Categories.css'
import { Link } from 'react-router-dom'
import {PhoneFill,Laptop, LaptopFill} from 'react-bootstrap-icons'
import AllMobiles from './AllMobiles'
function Categories(){
    
    let styles={marginLeft:'14px',marginTop:'9px',height:'25px',width:"25px",}
    return(
        <div className='categories-div'>
         <Link to="/"><p>For You</p> </Link>
         <p>Fashion</p>  
         <Link to="/mobiles"><p  ><PhoneFill style={styles}/>Mobiles</p></Link> 
         <Link to="/laptops" ><p ><LaptopFill style={styles}/>Laptops</p> </Link>
          <p>Beauty</p>
           <p>FootWear</p>
        </div>
    )
}
export default Categories;