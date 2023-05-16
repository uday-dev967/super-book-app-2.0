import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import Loader from "react-loader-spinner";
import {FaThList} from "react-icons/fa"
import {BsFillGridFill,BsSearch} from "react-icons/bs"
import GridView from "../GridView";
import ListView from "../ListView"
import {LoadingViewContainer} from "./styledComponents";
import {AiFillPlusCircle} from "react-icons/ai"
import "./index.css"
const apiStatusConstants = {
    initial: "INITIAL",
    inProgress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE",
};

const HomePage = () => {
    const navigate = useNavigate()
    const [listView, setView] = useState(true)
    const [userSearch, setUserSearch] = useState("")
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null,
    });

    useEffect(() => {
        
        const getFavData =  async() => {
            setApiResponse({
            status: apiStatusConstants.inProgress,
            data: null,
            errorMsg : null
          });

          const url = `https://super-book-portal-production.up.railway.app/books`;
          const response = await fetch(url);
          const responseData = await response.json();

          if (response.ok) {
            setApiResponse((prevState) => ({
              ...prevState,
              status: apiStatusConstants.success,
              data: responseData,
            }));
          } else {
            setApiResponse((prevState) => ({
              ...prevState,
              status: apiStatusConstants.failure,
              errorMsg: "SOMETHING WENT WRONG",
            }));
          }
        };
    
        getFavData();
      }, []);    

    const onClickAddFrom = () => {
        navigate("/form-page")
    }

    const onChangeSearch = (e) => {
        setUserSearch(e.target.value)
    }

    const toggle = () => {
        setView(!listView)
    }



    const renderSuccessView = () => {
        const {data} = apiResponse
        
        if (data) {const filteredData = data.filter(each => `${each.title}${each.author}`.toLowerCase().includes(userSearch.toLocaleLowerCase()))
        
        if (listView) {
            return (
                <div>
                    <ul className="book-ul-list">
                        {filteredData.map(each => <ListView key={each.id} bookData={each}/>)}
                    </ul>
                </div>
            )
        }
        return (<div>
            <ul className="book-ul-grid">
                {filteredData.map(each => <GridView key={each.id} bookData={each}/>)}
            </ul>
        </div>)}

        return (
            <div>
                <div className="d-flex flex-row justify-content-center align-items-center no-data">
                    <h1 className="text-success p-2 text-center">OPPS! SOMETHING WENT WRONG</h1>
                </div>
            </div>
        )
    }

    const renderLoadingView = () => (
        <LoadingViewContainer>
            <div className="d-flex flex-row justify-content-center align-items-center no-data">
                <Loader type="ThreeDots" color="green" height="50" width="50" />
            </div>
        </LoadingViewContainer>
    );

    const renderFailureView = () => {
        navigate("/failed-view")
  
      }

    const rendreViews = () => {
        const { status } = apiResponse;
        switch (status) {
        case apiStatusConstants.inProgress:
            return renderLoadingView();
        case apiStatusConstants.success:
            return renderSuccessView();
        case apiStatusConstants.failure:
            return renderFailureView();
        default:
            return null;
        }
      }

    return(
        <div>
        <div className="container pt-5">
            <div className="row mt-3">
                <div className="col-2 col-md-1 m-2" onClick={toggle}>
                    {listView ? (<>
                        <FaThList className="d-flex d-md-none" onClick={toggle} size={"30px"} style={{color : "green"}}/>
                        <FaThList className="d-none d-md-flex" onClick={toggle} size={"50px"} style={{color : "green"}}/>
                        </>
                    ) : (
                        <>
                            <BsFillGridFill className="d-none d-md-flex" onClick={toggle} style={{color: "green"}} size={"50px"} />
                            <BsFillGridFill className="d-flex d-md-none" onClick={toggle} style={{color: "green"}} size={"30px"} />
                        </>
                    )}
                </div>
                <div className="search-container col-8 m-2 d-flex flex-row align-self-center">
                    <input type="text" placeholder="author,title" value={userSearch} onChange={onChangeSearch}  className="home-input d-flex d-md-none"/>
                    <input type="text" placeholder="author,title" value={userSearch}  onChange={onChangeSearch} className="home-input d-none d-md-flex"/>
                    <button type="button"   className="home-search-button">
                        <BsSearch style={{color : "green"}} />
                    </button>
                </div>
           </div>
           <div className="row">
             {rendreViews()}
           </div>
           <div className="add-icon-home">
                <AiFillPlusCircle size={"50px"} style={{color : "green"}} onClick={onClickAddFrom} className="d-flex d-md-none"/>
                <button type="button" onClick={onClickAddFrom} className="btn btn-success d-none d-md-flex">Add a book</button>
           </div>
        </div>
        </div>
    )
}

export default HomePage