import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kegiatan from './assets/componen/Kegiatan'
import Calender from './assets/componen/Calender'
import Grid from './assets/componen/Grid'
function App() {
  /*const [count, setCount] = useState(0)*/
  const dates = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
     <Grid /> 
      {/* <div className="box-calender">
        {dates.map(date=>{
          <Calender   number={date}/>
          return(
          )
        })}
      </div> */}
    </>
  )
}
export default App
