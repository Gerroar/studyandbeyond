import { Link } from "react-router-dom";

export default function Denmark() {
    
    return(
        <div className="contenido">
            <h1>Dinamarca</h1>
            <Link to="/" className="text-link">
                <button>Home</button>
            </Link>
        </div>
    );
}