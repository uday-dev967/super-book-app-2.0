import { useNavigate } from "react-router-dom";
import "./index.css"

const SuccessSubminssion = () => {
    const navigate = useNavigate()
    
    const goToHome = () => {
        navigate("/")
    }

    const goToForm = () => {
        navigate("/form-page")
    }
    
    return (
        <div className="success-home-container">
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center ml-2 mr-2">
                <img src="https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/5f31557ae83d3d1636437679_DefaultThankYouMsg.png" className="success-image" alt="failure" />
                <p>WANT TO ADD A NEW BOOK ?</p>
                <button type="button" onClick={goToForm} className="btn btn-warning">Add</button>
                <p className="m-1"> OR </p>
                <button type="button" onClick={goToHome} className="btn btn-light">Back To Home</button>
            </div>
        </div>
    )
}
export default SuccessSubminssion