// import Cookies from "js-cookie"

import { useNavigate } from "react-router-dom"
import "./index.css"

const NotFound =  () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const renderView = () => (
        <div>
        <div className="mt-5">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" alt="not-found" className="not-found-image" />
            <h1>Page Not Found</h1>
            <p>we are sorry, the page you requested could not be found.</p>
            <button type="button" onClick={goToHome} className="btn btn-primary">Back To Home</button>
        </div>
        </div>
    )
    
    return (
        <div className="not-found-home-container">
            {renderView()}
        </div>
    )
}

export default NotFound