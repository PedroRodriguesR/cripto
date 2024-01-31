import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from './detail.module.css'

interface CoinProps {
    delta_1h: string,
    delta_7d: string,
    delta_24h: string,
    delta_30d: string,
    high_24h: string,
    last_updated_timestamp: string,
    low_24h: string,
    market_cap: string,
    markets?: string[],
    name: string,
    price: string,
    rank: number,
    remaining: number,
    show_symbol: string,
    symbol: string,
    total_volume_24h: string
    formatedPrice: string,
    formatedMarket: string,
    formatedLowPrice: string,
    formatedHighPrice: string,
    error?: string
}

export function Detail() {

    const { coinsymbol } = useParams()
    const [coinDetail, setCoinDetail] = useState<CoinProps>()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        function getData() {
            fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=b4cd8f8fb3de94c6&symbol=${coinsymbol}`)
                .then(result => result.json())
                .then((data: CoinProps) => {
                    console.log(data)

                    let price = Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        style: 'currency'
                    })

                    const formatedDataCoin = {
                        ...data,
                        formatedPrice: price.format(Number(data.price)),
                        formatedMarket: price.format(Number(data.market_cap)),
                        formatedLowPrice: price.format(Number(data.low_24h)),
                        formatedHighPrice: price.format(Number(data.high_24h))
                    }


                    setCoinDetail(formatedDataCoin)
                })
        }

        getData()
        setLoading(false)


    }, [coinsymbol])

    if (loading) {
        return (
            <div className={style.container}>
                <h1 className={style.center} >Carregando informações...</h1>
            </div>
        )
    }

    return (
        <div className={style.container}>
            <h1>Detalhes</h1>
            <h1 >{coinsymbol}</h1>
            <h1 className={style.center}>{coinDetail?.name}</h1>
            <p className={style.center}>{coinDetail?.symbol}</p>
        </div>

    )
}