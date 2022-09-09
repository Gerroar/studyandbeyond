import { Link } from 'react-router-dom';

export default function Home() {
    /**Aqui se muestran los botones principales con información de SB y 
     * porque estudiar en Dinamarca
     */
    return(
        <div className="contenido">
                <h1>Home</h1>
                <Link to="/sb">
                    <button>SB</button>
                </Link>
        </div>
    );
}