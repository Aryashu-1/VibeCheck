import React from 'react'
import { useState } from "react";
import { RequestIDContext } from '../Context/RequestIDContext';


function RequestStore({children}) {
    
    let [requestId,setRequestId] = useState('');
    
    return (
      
      <div>
          <RequestIDContext.Provider value={[requestId,setRequestId]}>
              {children}
          </RequestIDContext.Provider>
      </div>
    )
}

export default RequestStore


