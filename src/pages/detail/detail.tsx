import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
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
    formatedDelta24h: number,
    error?: string
}

export function Detail() {

    const { coinsymbol } = useParams()
    const [coinDetail, setCoinDetail] = useState<CoinProps>()
    const [loading, setLoading] = useState<boolean>(true)

    const navigate = useNavigate()


    useEffect(() => {
        function getData() {
            fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=b4cd8f8fb3de94c6&symbol=${coinsymbol}`)
                .then(result => result.json())
                .then((data: CoinProps) => {

                    // if (data.error) navigate('/')

                    let price = Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        style: 'currency'
                    })

                    const formatedDataCoin = {
                        ...data,
                        formatedPrice: price.format(Number(data.price)),
                        formatedMarket: price.format(Number(data.market_cap)),
                        formatedLowPrice: price.format(Number(data.low_24h)),
                        formatedHighPrice: price.format(Number(data.high_24h)),
                        formatedDelta24h: parseFloat(data.delta_24h.replace(',', '.'))
                    }

                    setCoinDetail(formatedDataCoin)
                    setLoading(false)
                })
                .catch(() => {
                    navigate('/')
                })
        }

        getData()



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
            <h1 className={style.center}>{coinDetail?.name}</h1>
            <p className={style.center}>{coinDetail?.symbol}</p>


            <section className={style.content}>
                <p><strong>Preço:</strong> {coinDetail?.formatedPrice}</p>
                <p><strong>Maior preço 24h:</strong> {coinDetail?.formatedHighPrice} </p>
                <p><strong>Menor preço 24h:</strong> {coinDetail?.formatedLowPrice}</p>
                <p><strong>Delta 24h:</strong>
                    <span className={coinDetail?.formatedDelta24h && (coinDetail?.formatedDelta24h >= 0) ? style.profit : style.loss}>{coinDetail?.delta_24h}</span>
                </p>
                <p><strong>Valor de mercado:</strong> {coinDetail?.formatedMarket}</p>
            </section>
        </div>

    )
}