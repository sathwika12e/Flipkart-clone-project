import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../Css/Allmobiles.css";
import { useNavigate } from "react-router-dom"; 

function AllMobiles({ brand }) {
  const [data, setData] = useState([]);
  let navigate=useNavigate();

  useEffect(() => {
    let get_url = "http://127.0.0.1:8000/api/getbrandsmodelsdata/";
    axios.get(get_url).then((resp) => {
      setData(Array.isArray(resp.data) ? resp.data : []);
    });
  }, []);

  console.log(brand);
let imgClick=(data)=>{
navigate("/overview",{state:data})

}
  const renderBrandDetails = (data, brand) =>
    data.modelbrand.brandname.toLowerCase() === brand.toLowerCase() ? (
      
      <div className="parent-div">
        <img onClick={()=>imgClick(data)} src={data.modelimage} />
        <h1>
          {brand}
          {data.modelname}
        </h1>
      </div>
    ) : (
      ""
    );
  return (
    <>
      <h1>{brand}</h1>
      <div>
      {data?.map((i) => renderBrandDetails(i, brand))}
      </div>
    </>
  );
}
export default AllMobiles;
