import React from 'react'

const Calender = ({number}) => {
  return (
    <div className='calender'>
        <div className="header">date</div>
        <div className="date">{number}</div>
        <div className="info">Hari Ibu</div>
    </div>
  )    
}

export default Calender