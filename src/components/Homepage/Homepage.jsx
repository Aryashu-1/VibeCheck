import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { RequestIDContext } from '../../Context/RequestIDContext'


const Homepage = () => {


  let [cloudURL,setCloudURL] = useState('')
  let [requestId,setRequestId] = useContext(RequestIDContext)



  /* async function getImagesStats(){

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
    } catch (error) {
      console.error(error); 
    }
  } */



  async function postImageAndGetRequestId(){

    
    console.log('postImageAndGetRequestId')
    console.log(cloudURL);



    let data = JSON.stringify({
      "task_id": "123",
      "group_id": "123",
      "data": {
        "document1": cloudURL
      }
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://face-liveness-check.p.rapidapi.com/v3/tasks/async/check_photo_liveness/face',
      headers: { 
        'X-RapidAPI-Host': 'face-liveness-check.p.rapidapi.com', 
        'content-type': 'application/json', 
        'X-RapidAPI-Key': '08f4d919a1msheb718f871f01ef5p1d828ajsn80dcd7891758'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setRequestId(response.data.request_id)
    })
    .catch((error) => {
      console.log(error);
    });

  }

  
   

  async function uploadImage(e) {
    try {
      const formData = new FormData();
  
      if (e.target.files.length > 0) {
        formData.append('file', e.target.files[0]);
  
        formData.append('upload_preset', 'ong2lcml');
  
        console.log(formData);
  
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dzu5moxmj/image/upload",
          formData
        );
        
        let url = response.data.url

        console.log(typeof(url));

        setCloudURL(response.data.url)

      } else {
        console.error("No file selected");
      }
    } catch (error) {
      console.error("Error during image upload:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Status text:", error.response.statusText);
      } else if (error.request) {
        console.error("No response received from the server");
      }
    }
    
    /* postImageAndGetRequestId() */

  }
  return (
    <div>
        <form>
            <input type='file' onChange={uploadImage}></input>
        </form>
        <NavLink to={'/getstats'}><button className='bg-gray-700 text-white' onClick={postImageAndGetRequestId}>PostImage and get Id </button></NavLink>
    </div>
  )
}

export default Homepage