import img1 from '../assets/flipkartcarouselimage1.jpeg'
import img2 from '../assets/flipkartcarouselimage2.jpeg'
import img3 from '../assets/flipkartcarouselimage3.jpeg'
import img4 from '../assets/flipkartcarouselimage4.jpeg'
import img5 from '../assets/flipkartcarouselimage5.jpeg'
import img6 from '../assets/flipkartcarouselimage6.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

import CarouselComponent from './CarouselComponent'
function Foryou(){
     let carouselimg=[img1,img2,img3,img4,img5,img6,]
        
    return(
        <>
         <h1>hello from foryou</h1>
     <CarouselComponent carouselimg={carouselimg} />
     </>
    )
       
    
}
export default Foryou;