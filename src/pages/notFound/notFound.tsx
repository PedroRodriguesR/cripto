import style from './notFound.module.css'
import { Link } from 'react-router-dom'

export function NotFound() {

    return (
        <div className={style.container}>
            <h1>
                Essa página não existe: 404
            </h1>
            <Link to={'/'}>Acessar cripto moedas</Link>
        </div>
    )
}