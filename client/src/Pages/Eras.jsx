import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function Eras(){

        

  const [eras, setEras] = useState([])    

    useEffect(() => {
       
        async function fetchEra() {
            console.log("Time to fetch some eras from the server")
            const response = await fetch(`http://localhost:4000/eras`)
            const erasList = await response.json()
            setEras(erasList)
        }
        fetchEra()
        const intervalID = setInterval(fetchEra, 5000) 

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
    
        <section>
            <h2>Some eras in the history of mankind</h2>
            <div className="eras-container">
               {eras.map((era) => ( 
                    <div key={era.id} >
                        <Link to={`/eras/${era.id}`}>
                            <p className="era">{era.name}</p>  
                         </Link>
                    </div>
                 ))} 
            </div>
        </section>
    )
}
