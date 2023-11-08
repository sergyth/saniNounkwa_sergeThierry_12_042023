import './greetings.css';

const Greetings = (props) => {
  return (
    <div className='greet '>
        <h1 className='greetings-firstname'>Bonjour, <span className="firstname">{props.firstname}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p> 
    </div>
  )
}

export default Greetings