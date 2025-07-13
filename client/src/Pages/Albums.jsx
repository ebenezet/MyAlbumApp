
import { Link } from 'react-router-dom'
import '../Style/Albums.css'
import { useState, useEffect } from 'react'


export default function Albums(){

        

  const [albums, setAlbums] = useState([])    

    useEffect(() => {
       
        async function fetchAlbum() {
            console.log("Time to fetch some albums from the server")
            const response = await fetch(`http://localhost:4000/albums`)
            const albumsList = await response.json()
            setAlbums(albumsList)
        }
        fetchAlbum()
        const intervalID = setInterval(fetchAlbum, 5000) 

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
    
        <section>
            <h2 className='albumsintro'>Here are some all time classics and some newly released albums</h2>
            <div className="albums-container">
                {albums.map((album) => ( 
                    <div key={album.id} >
                        <Link to={`/albums/${album.id}`}>
                            <img className="ablbumcover" src={album.cover} alt="an album cover"/>
                         </Link>
                    </div>
                 ))} 
            </div>
        </section>
    )
}