import "./index.css"


const ListView = (props) => {
    const {bookData} = props
    
    const {imageLink,country,pages,language,author,title} = bookData
    const image = imageLink[0] === "h" ? false : true
    return (
        <li className="book-list-item">
            <div className="d-flex flex-row">
                <div>
                    <img src={`${image ? require("../../" + imageLink) : imageLink}`} alt="Book" className="Book-list-image" />
                </div>
                <div>
                    <h1 className="book-title">{title}</h1>
                    <p className="book-detail">{author}</p>
                    <p className="book-detail" >{country}</p>
                    <div className="d-flex flex-row justify-content-between page-lan">
                        <p className="book-detail">Pages: {pages}</p>
                        <p className="book-detail">{language}</p>
                    </div>
                    <button type="button" className="mt-3 know-more-button btn btn-outline-secondary">Know More...</button>
                </div>
            </div>
            <hr />
        </li>
    )
}

export default ListView