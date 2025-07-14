import { useState } from "react"
import '../Style/Contactus.css'

export default function Contactus(){

    const [formValues, setFormValues]= useState({
    firstname:"",
    lastname:"",
    country: "",
    comment:""
})



 function handlelSubmit(event){
    event.preventDefault()
    console.log("The form values are", formValues)
 }

  function handleChange(event) {
    setFormValues({
        ...formValues,
        [event.target.name]: event.target.value})
   
  }



    return(
        <div  key="form-container"  onSubmit={handlelSubmit}>
            <form className="contactus-container">
                <label htmlFor="firstname" >First Name</label>
                <input type="text" id="firstname" name="firstname" onChange={handleChange}/>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" onChange={handleChange}/>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" onChange={handleChange}/>
                <label htmlFor="comment">Comment</label>
                <textarea type="text" name="comment" className="textarea" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}