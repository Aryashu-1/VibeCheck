import React from 'react'
import { useState } from "react";
import { StatsContext } from '../Context/StatsContext';


function StatsStore({children}) {
    
    let [Stats,setStats] = useState({});
    
    return (
      
      <div>
          <StatsContext.Provider value={[Stats,setStats]}>
              {children}
          </StatsContext.Provider>
      </div>
    )
}

export default StatsStore


