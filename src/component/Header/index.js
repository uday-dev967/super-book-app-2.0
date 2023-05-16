import { useNavigate } from "react-router-dom"
import {AiOutlineLogout} from "react-icons/ai"

import "./index.css"

const Header = (props) => {
    const navigate = useNavigate()
    const onClickAppIcon = () => {
        navigate("/")
    }

    return(
    <div className="container-fluid header-main-container ">
        <div className="row d-flex flex-row justify-content-between pt-1 pb-1  header-back-container">
            <div className="col-2 d-flex d-md-none">
            <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" onClick={onClickAppIcon} alt="weather-icon" className="app-icon"/>
            </div>

            <div className="col-3 d-md-flex d-none" onClick={onClickAppIcon}>
            <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"  alt="weather-icon" className="app-icon"/>
            <h1 className="header-title">SUPER BOOK</h1>
            </div>
        
        <div className="col-9 d-flex flex-row justify-content-end">
        
        <div className="d-flex d-md-none align-self-center">
            <AiOutlineLogout  style={{color : "orange"}} size={"25px"}/>
        </div>
        <button className="d-none d-md-flex align-self-center btn btn-outline-danger"  type="button">LOGOUT</button>
        </div>
        
        </div>
    </div>
)}

export default Header