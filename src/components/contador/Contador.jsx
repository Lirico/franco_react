import { useReducer } from "react"


const Contador = () => {

    // CAREPTA REDUCER
    // initialstate.js
    // reducer.js
    // actions.js

    const initialState = {
        contador: 0,
        visible: false,
    }

    function reducer(state, action) {
        switch (action.type) {
            // CONTADOR
            case "INCREMENTAR": {
                return {
                    ...state,
                    contador: state.contador - 1
                }
            }
            case "RESETEAR":
                return initialState;
            case "DECREMENTAR": {
                    return {
                        ...state,
                        contador: state.contador + 1
                    }
                }

            // VISIBLE
            case "MOSTRAR": {
                return {
                    ...state,
                    visible: true
                }
            }

            case "OCULTAR": {
                return {
                    ...state,
                    visible: false
                }
            }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    const decrementar = () => dispatch({type: "DECREMENTAR"})
       
    const restear = () => dispatch({type: "RESETEAR"})

    const incrementar = () => dispatch({type: "INCREMENTAR"})

    const mostrar = () => dispatch({type: "MOSTRAR"})

    const ocultar = () => dispatch({type: "OCULTAR"})

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

