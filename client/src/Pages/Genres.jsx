import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function Genres(){

        

  const [genres, setGenres] = useState([])    

    useEffect(() => {
       
        async function fetchGenre() {
            console.log("Time to fetch some music genres from the server")
            const response = await fetch(`https://myalbumapp.onrender-1.com/genres`)
            const genresList = await response.json()
            setGenres(genresList)
        }
        fetchGenre()
        const intervalID = setInterval(fetchGenre, 5000) 

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
    
        <section>
            <h2>Some music genres that have evolved over the years</h2>
            <div className="genres-container">
                {genres.map((genre) => ( 
                    <div key={genre.id} >
                        <Link to={`/genres/${genre.id}`}>
                            <p className="genre">{genre.name}</p>  
                         </Link>
                    </div>
                 ))} 
            </div>
        </section>
    )  
}