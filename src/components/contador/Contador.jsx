import { useReducer } from "react"
import { TYPES } from "@/counterReducer/counterActions"
import { reducer } from "@/counterReducer/counterReducer"
import { initialState } from "@/counterReducer/counterInicialState"


const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const decrementar = () => dispatch({type: TYPES.DECREMENTAR})
       
    const restear = () => dispatch({type: TYPES.RESETEAR})

    const incrementar = () => dispatch({type: TYPES.INCREMENTAR})

    const mostrar = () => dispatch({type: TYPES.MOSTRAR})

    const ocultar = () => dispatch({type: TYPES.OCULTAR})

  return (
    <>
        <div className="container">
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={restear}>0</button>
                <button onClick={incrementar}>+</button>
                <button onClick={mostrar}>Mostrar</button>
                <button onClick={ocultar}>Ocultar</button>
            </div>
            { state.visible && <h3>{state.contador}</h3> }
        </div>

        <style jsx>{`
            .container  {
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: center;
            }
        `}</style>
    </>
  )
}

export default Contador

