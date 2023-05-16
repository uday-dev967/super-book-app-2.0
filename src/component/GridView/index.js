import "./index.css"

const GridView = (props) => {
    const {bookData} = props
    
    const {imageLink,country,pages,language,author,title} = bookData
    
    const image = imageLink[0] === "h" ? false : true
    return (
        <li className="book-grid-item ">
            <div className="d-flex flex-column flex-md-row">
                <div>
                    <img src={`${image ? require("../../" + imageLink) : imageLink}`} alt="Book" className="Book-list-image" />
                </div>
                <div>
                    <h1 className="grid-book-title">{title}</h1>
                    <p className="grid-book-detail">{author}</p>
                    <p className="grid-book-detail" >{country}</p>
                    <div className="d-flex flex-column">
                        <p className="grid-book-detail">Pages: {pages}</p>
                        <p className="grid-book-detail">{language}</p>
                    </div>
                    <button type="button" className="btn btn-outline-secondary d-flex d-md-none">Know More...</button>
                    <button type="button" className="btn btn-outline-secondary d-none d-md-flex">Know...</button>
                </div>
            </div>
        </li>
    )
}

export default GridView