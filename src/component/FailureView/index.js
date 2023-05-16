import { useNavigate,useLocation } from "react-router-dom";
import "./index.css"

const FailureView = () => {
    const navigate = useNavigate()
    const prop = useLocation()
    const propData = prop.state
    var errorMsg
    if (propData) {
         errorMsg = propData.errorMsg
    }
    const goToHome = () => {
        navigate("/")
    }
    
    return (
        <div className="fail-home-container">
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center ml-2 mr-2">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" className="fail-image" alt="failure" />
                <p>OPPS! SOMEHTING WENT WRONG</p>
                {errorMsg && <p className="text-warning text-center">{errorMsg}</p>}
                <button type="button" onClick={goToHome} className="btn btn-primary">Back To Home</button>
            </div>
        </div>
    )
}
export default FailureView