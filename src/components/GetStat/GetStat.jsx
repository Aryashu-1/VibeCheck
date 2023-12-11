import React from 'react'
import { RequestIDContext } from '../../Context/RequestIDContext'
import { useContext } from 'react'
import { StatsContext } from '../../Context/StatsContext'
import axios from 'axios'
import { NavLink } from 'react-router-dom'



function GetStat() {

    let [requestId,setRequestId] = useContext(RequestIDContext)
    let [Stats,setStats] = useContext(StatsContext)

    async function getImagesStats(){

        if(!requestId) return
    
        console.log('getImageStates')
        console.log(requestId);
    
        const options = {
          method: 'GET',
          url: `https://face-liveness-check.p.rapidapi.com/v3/tasks`,
          params:{
            request_id : requestId
          },
          headers: {
            'X-RapidAPI-Host': 'face-liveness-check.p.rapidapi.com',
            'X-RapidAPI-Key': '08f4d919a1msheb718f871f01ef5p1d828ajsn80dcd7891758'
          }
        };
        
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setStats({...response.data})
        } catch (error) {
          console.error(error); 
        }
      }


  return (
    <div className='h-screen'>
        <h1>{requestId}</h1>
        <NavLink to={'/result'}><button onClick={getImagesStats} className='bg-red-700'>Get image stats</button></NavLink>
    </div>
  )
}

export default GetStat