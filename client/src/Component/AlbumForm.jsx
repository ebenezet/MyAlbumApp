import {useState} from "react"


export default function AlbumForm() {
    const [form, setForm] = useState({})

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch(`https://myalbumapp-1.onrender.com/albums`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form) 
            })
        } catch (err) {
            throw new Error('Something went wrong')
        }
    }

    function handleChange(event) {
        console.log(event.target.value)
        console.log({[event.target.name]: event.target.value})

        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input name="title" placeholder="title" onChange={handleChange} required />
            <label htmlFor="artist">Artist</label>
            <input name="artist" placeholder="artist" onChange={handleChange} required />
            <label htmlFor="year">Year</label>
            <input name="year" placeholder="year" onChange={handleChange} required />
            <label htmlFor="Genre">Genre</label>
            <input name="genre_id" placeholder="genre_id" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    )
}