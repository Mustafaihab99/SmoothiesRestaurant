import { Link } from "react-router-dom";
import logo from "./images/logo.png";
export default function FormBar(){
    return(
        <div className="formbar">
            <img src={logo} alt=""/>
            <h2>MockaBucks</h2>
            <Link to="/">
            <button>Go to Website</button>
            </Link>
        </div>
    )
}