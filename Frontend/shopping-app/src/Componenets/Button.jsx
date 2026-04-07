import "../Css/button.css";
import { Cart } from "react-bootstrap-icons";
function Button(props) {
  return (
    <button className="btn-css" onClick={props.fun}>
      {props.name}
     {props.imag}
    </button>
  );
}
export default Button;
