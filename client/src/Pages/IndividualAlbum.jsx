import {Link, useParams} from "react-router"
import {useState, useEffect} from "react"
import '../Style/IndividualAlbum.css'

export default function IndividualAlbum() {
    const [album, setAlbum] = useState('')


    const {id} = useParams()
    
    useEffect(() => {
        async function fetchAlbum() {
            const res = await fetch(`https://myalbumapp.onrender.com/albums/${id}`)
            const albumdata = await res.json()
            setAlbum(albumdata[0])
        }

        fetchAlbum()
    }, [])

    return (
        <div>
            <div className="individualalbum-container">
                <p>Album title:{album.title}</p>
                <p>Album artist: {album.artist}</p>
                <p>Album year: {album.year}</p>
                <img className="individualalbum" src={album.cover} alt="album cover" />
                <Link to={"/albums"}>RETURN TO ALBUMS</Link>
            </div>
        </div>
    )
}