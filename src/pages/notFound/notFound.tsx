import style from './notFound.module.css'
import { Link } from 'react-router-dom'

export function NotFound() {

    return (
        <div className={style.container}>
            <h1>
                Página de not found.
            </h1>
            <Link to={'/'}>Acessar cripto moedas</Link>
        </div>
    )
}