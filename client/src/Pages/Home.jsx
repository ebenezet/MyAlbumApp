
import AlbumForm from '../Component/AlbumForm.jsx'
import EraForm from '../Component/EraForm.jsx'
import GenreForm from '../Component/GenreForm.jsx'
import '../Style/Home.css'

export default function Home(){
    return(
        <div className='home-page'>
            <h2>Welcome to Album-Mania, home of great records!</h2>
            <h3>Please add a new album to the collection</h3>
            <AlbumForm className="albumform" />
            <h3>Please add a new music genre</h3>
            <GenreForm className="genreform" />
             <h3>Please add a new era to the era list</h3>
            <EraForm className="era" />
        </div>
    )
}
