import {useState} from "react"

export default function GenreForm() {
    const [genre, setGenre] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch(`https://myalbumapp-1.onrender.com/genres`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(genre) 
            })
        } catch (err) {
            throw new Error('Something went wrong')
        }
    }

    function handleChange(event) {
        setGenre(event.target.value)
     console.log(genre)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="genre">Genre</label>
            <input name="genre" placeholder="genre" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    )
}