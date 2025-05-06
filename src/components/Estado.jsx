import { useState, useEffect } from "react"




const Estado = () => {

    const initialState = "Morocho"

    const [cabello, setCabello] = useState(initialState)

    useEffect(() => {
        if(cabello != initialState){
            console.log("Goku se transformo")
        } else {
            console.log("Goku se destransformo")
        }
    }, [cabello])
    

  return (
    <>
        <div>{cabello}</div>
        <button onClick={() => setCabello("Rubio")}>Transfomar a SSJ 1</button>
        <button onClick={() => setCabello("Rubio con rayitos")}>Transfomar a SSJ 2</button>
        <button onClick={() => setCabello("Rubio con rayitos pero con el pelo hasta el culo")}>Transfomar a SSJ 3</button>
        <button onClick={() => setCabello("Colorado vende humo")}>Transfomar a SSJ God</button>
        <button onClick={() => setCabello("Turqueza sobre utilizado")}>Transfomar a SSJ Super God</button>
        <button onClick={() => setCabello(initialState)}>Volver a fase normal</button>
    </>
  )
}

export default Estado