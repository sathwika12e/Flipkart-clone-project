import {Routes,Route} from 'react-router-dom'
import Mobiles from './Mobiles'
import Foryou from './Foryou'
import Laptops from './Laptops'
import AllMobiles from './AllMobiles'
import Overview from './Overview'
import Cart from './Cart'
import Login from './Login'
import ReusableComponent from './ReusableComponent'
function Mainpage(){
    return(
        <>
        <div>
<Routes>
     <Route path='/login' element={<Login/>}></Route>
     <Route path="/" element={<Foryou/>}></Route>
    <Route path="/mobiles" element={<ReusableComponent category="Mobiles"/>}></Route>
    <Route path="/laptops" element={<ReusableComponent category="Laptops"/>} ></Route>
  
    <Route path='/overview' element={<Overview/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </div>
    
</>
    )

}
export default Mainpage