
import {useState} from 'react'

const SpreadOperator = () => {

    const [table, setTable] = useState(() => [{ managmentGroup: [1], tenants: [1], pscs: [1], tuvieja: [1]}])

    const data = ["a","b","c"]

    const filtrar = () => setTable((table) => {
        return [
            {
                ...table[0],
                tenants: data
            }
        ]
    })
    
  return (
    <>
        <table>
            <tbody>
                {
                    table.map(row => (
                        <tr>
                            <td>{row.managmentGroup}</td>
                            <td>{row.tenants}</td>
                            <td>{row.pscs}</td>
                            <td>{row.tuvieja}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <button onClick={filtrar}>Filtrar</button>
    </>
  )
}

export default SpreadOperator