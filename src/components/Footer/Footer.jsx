import React from 'react'

function Footer() {
  return (
    <div className='flex items-center justify-center'>
        <div className='px-40 py-10'>
                <h1 className='font-bold text-white'>CONTACT US</h1>
                <ul className='list-disc'>
                        
                        <li className='m-2 '>shmr123@gmail.com</li>
                        <li className='m-2 '>Mobile-1 : 7013108450</li>
                        <li className='m-2 '>Mobile-2 : 8686335240</li>

                </ul>
        </div>
        <div className='px-35 py-10'>
                <h1 className='font-bold text-white'>ACTIVITY</h1>

                <ul className='list-disc'>
                        
                        <li className='m-2' >SUPPORT</li>
                        <li className='m-2' >PROJECTS</li>
                        <li className='m-2' >SERVICES</li>

                </ul>
        </div>
        <div className='px-40 py-10'>

                <h1 className='font-bold text-white'>SOCIAL</h1>
                <ul className='list-disc'>
                        
                        <li className='m-2'>Git</li>
                        <li className='m-2'>LinkedIn</li>
                        <li className='m-2'>Twitter</li>

                </ul>            
        </div>  
    </div>
  )
}

export default Footer