import { Link } from "react-router-dom";


export default function About(){

    return(
      
        <div>
            <h2>A little bit about us</h2>
            <p>We are a groups of friends who love music and want to make it accessible to everyone.</p>
            <p>Here you will find albums from around the world. </p>
            <p>We are constantly updating our collection, so make sure to check back often!</p>
            <p>Please check out our :</p>
            <ul>
            <li><Link to="/albums">albums</Link></li>
            <li><Link to="/genres">albums genres</Link></li>
            <li><Link to="/eras">albums eras</Link></li>
            </ul>
        </div>
        
    )
}