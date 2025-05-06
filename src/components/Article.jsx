import React from 'react'
import Boton from './Boton'



const Article = ({children, btn}) => {
  return (
    <>
        <article style={{color: 'white'}}>
            {children}
            <Boton btn={btn} />
        </article>
    </>
  )
}

export default Article