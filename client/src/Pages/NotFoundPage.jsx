import { Link } from "react-router-dom"
import '../Style/NotFoundPage.css'


export default function NotFoundPage() {
    return (
        <div className="not-found-container">
            <h2>Sorry, you've reached a dead end!</h2>
            <img className="broken-record" src="https://as2.ftcdn.net/jpg/01/40/24/97/1000_F_140249774_BTfUEjrni0EvIAMIEindx3mCU3yXhL2i.jpg" alt="broken link representation"/>
            <h3> Please return to <Link to="/">Home page</Link></h3>
        </div>
    )
}