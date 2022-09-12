import { Link } from 'react-router-dom';

export default function SB() {
    return (
        <div className="contenido">
            <h1>SB</h1>
            <Link to="/" className="text-link">
                <button>Home</button>
            </Link>
        </div>
    )
}