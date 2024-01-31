import { FormEvent, useEffect, useState } from 'react'
import style from './home.module.css'
import { BiSearch } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

interface CoinProps {
    name: string;
    price: string;
    delta_24h: string;
    symbol: string;
    volume_24h: string;
    market_cap: string;
    formatedPrice: string;
    formatedMarket: string;
}

interface DataProps {
    coins: CoinProps[]
}


export function Home() {

    const [coins, setCoins] = useState<CoinProps[]>([])
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    useEffect(() => {

        function getData() {
            fetch('https://sujeitoprogramador.com/api-cripto/?key=b4cd8f8fb3de94c6')
                .then(response => response.json())
                .then((data: DataProps) => {
                    let coinsData = data.coins.slice(0, 15)
                    // console.log(coinsData)

                    let price = Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        style: 'currency'
                    })

                    const formatedResults = coinsData.map((item) => {
                        const newItem = {
                            ...item,
                            formatedPrice: price.format(Number(item.price)),
                            formatedMarket: price.format(Number(item.market_cap))
                        }

                        return newItem
                    })

                    setCoins(formatedResults)
                    //coins.forEach(e => console.log(e!.name))
                })
        }

        getData()

    }, [])

    function handleSubmit(e:FormEvent){
        e.preventDefault()
        if (inputValue == '' ) return 
        navigate(`/detail/${inputValue}`)
    }


    return (
        <main className={style.container}>
            <form className={style.form} action="" onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Digite o simbolo da moeda: BTC...' 
                    onChange={e=>setInputValue(e.target.value)}
                    value={inputValue}
                    />

                <button type='submit'>
                    <BiSearch size={30} color='#FFF' />
                </button>
            </form>


            <table>
                <thead>
                    <tr>
                        <th scope='col'>Moeda</th>
                        <th scope='col'>Valor Mercado</th>
                        <th scope='col'>Preço</th>
                        <th scope='col'>Volume</th>
                    </tr>
                </thead>

                <tbody id='tbody'>
                    {coins.map((coin: CoinProps) => (
                        <tr key={coin.symbol} className={style.tr}>
                            <td className={style.tdlabel} data-label='Moeda'>
                                <Link className={style.link} to={`/detail/${coin.symbol}`} >
                                    <span >{coin.name}</span> | {coin.symbol}
                                </Link>
                            </td>

                            <td className={style.tdlabel} data-label='Mercado'>
                                {coin.formatedMarket}
                            </td>
                            <td className={style.tdlabel} data-label='Preço'>
                                {coin.formatedPrice}
                            </td>

                            <td className={Number(coin?.delta_24h) >= 0 ? style.tdprofit : style.tdloss} data-label='Volume'>
                                <span>{coin.delta_24h}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot></tfoot>
            </table>


        </main>
    )
}

