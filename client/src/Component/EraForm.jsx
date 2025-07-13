import {useState} from "react"

export default function EraForm() {
    const [era, setEra] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch(`http://localhost:4000/eras`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(era) 
            })
        } catch (err) {
            throw new Error('Something went wrong')
        }
    }

    function handleChange(event) {
        setEra(event.target.value)
     console.log(era)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="era">Era</label>
            <input name="era" placeholder="era" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    )
}