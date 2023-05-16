import {useForm} from "react-hook-form"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useNavigate} from "react-router-dom"
import "./index.css"

const FormPage = (props) => {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        bookTitle : yup.string().required(),
        author : yup.string().required(),
        imageLink : yup.string().url().required("enter valid url https://abc.xyz/abc"),
        pages : yup.number().integer().positive().required("enter valid positive number"),
        language : yup.string().required(),
        country : yup.string().required()
    })
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver : yupResolver(schema)
    })
    const onSubmit = async (data, errors) => {
        console.log(data)
        console.log(errors)
        console.log(typeof(data))
        if (data) {
            const url = "https://super-book-portal-production.up.railway.app/add-book"
            const option = {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(data)
            }
            const response = await fetch(url, option)
            const fetchedData = await response.json()
            if (response.ok === true) {
                console.log(fetchedData.result)
                alert(fetchedData.result)
                navigate("/sucess")
            }
            else {
                alert("Failed to add the book")
                navigate("/failed-view", {state : {errorMsg : "Submission failed due to server internal error or server is bussy"}})
            }
            
        }
        else {
            alert("Failed to add the book")
            navigate("/failed-view", {state : {errorMsg : "Submission failed due to server internal error or server is bussy"}})
        }
        
    }


    
    return (
        <div>
        <div className="form-bg-container d-flex flex-column align-items-center">
            <div className="pt-5">
                <div className="mt-2 text-center">
                    <h1 class="form-title">ADD A NEW BOOK</h1>
                    <p class="form-tag">FILL THE FORM</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="form-book-container">
                    <label className="mt-1" htmlFor="book">BOOK TITLE</label>
                    <input type="text" className="form-input" id="book" placeholder="TITLE" {...register("bookTitle")}/>
                    {errors.bookTitle && <p className="text-warning">*{errors.bookTitle.message}</p>}
                    <label className="mt-3" htmlFor="author">AUTHOR</label>
                    <input type="text" className="form-input" id="author" placeholder="AUTHOR" {...register("author")}/>
                    {errors.author && <p className="text-warning">*{errors.author.message}</p>}
                    <label className="mt-3" htmlFor="imageLinke">IMAGE URL</label>
                    <input type="text" className="form-input" id="imageLink" placeholder="Eg: https://bookimage.com/find/q=?name=image.jpg" {...register("imageLink")}/>
                    {errors.imageLink && <p className="text-warning">*{errors.imageLink.message}</p>}
                    <label className="mt-3"  htmlFor="pages">NUMBER OF PAGES</label>
                    <input type="text" className="form-input" id="pages" placeholder="no.of pages" {...register("pages")}/>
                    {errors.pages && <p className="text-warning">*{errors.pages.message}</p>}
                    <label className="mt-3" htmlFor="language">LANGUAGE</label>
                    <input type="text" className="form-input" id="language" placeholder="LANGUAGE" {...register("language")}/>
                    {errors.language && <p className="text-warning">*{errors.language.message}</p>}
                    <label className="mt-3" htmlFor="country">COUNTRY</label>
                    <input type="text" className="form-input" id="country" placeholder="COUNTRY NAME" {...register("country")}/>
                    {errors.country && <p className="text-warning">*{errors.country.message}</p>}
                    <button type="submit" className="btn btn-outline-warning mt-3">PUBLISH BOOK</button>
                </form>
        </div>
        </div>
        </div>
    )
}

export default FormPage