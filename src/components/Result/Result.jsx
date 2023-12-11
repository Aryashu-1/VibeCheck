import React from 'react'
import { useContext } from 'react'
import { StatsContext } from '../../Context/StatsContext'

function Result() {

    let [Stats,setStats] = useContext(StatsContext);

  return (
    <div className='h-screen'>{JSON.stringify(Stats)}</div>
  )
}

export default Result