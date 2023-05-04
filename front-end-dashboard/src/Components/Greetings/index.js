
import { useState } from "react"
import getData from '../../data/index'
const Greetings = (props) => {
  return (
    <div>
        <h1>Bonjour, {props.firstname}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p> 
    </div>
  )
}

export default Greetings