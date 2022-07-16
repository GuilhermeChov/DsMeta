import axios from "axios"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Sale } from "../../models/sale"
import { BASE_URL } from "../../utils/request"
import NotificationButtom from '../NotificationButtom'
import './Styles.css'

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [minDate, setMindate] = useState(min)
    const [maxDate, setMaxdate] = useState(max)

    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`).then(Response => {
            setSales(Response.data.content)
        })
    }, [])

    return (
        <>
            <header />
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMindate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxdate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map(sale => {
                                return(
                                    <tr key={sale.id}>
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <div className="dsmeta-red-btn">
                                                <img src="notification-icon.svg" alt="Notificar" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                )
                            })
                        }
                        
                    </tbody>

                </table>
            </div>
      </>
            )
}
export default SalesCard
