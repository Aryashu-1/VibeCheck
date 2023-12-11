import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { RequestIDContext } from '../../Context/RequestIDContext'
import TextType from '../Typetext/TextType'


const Homepage = () => {


  let [cloudURL,setCloudURL] = useState('')
  let [requestId,setRequestId] = useContext(RequestIDContext)
  let [uploaded,setUploaded] = useState(false)



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

  function test(){
    return
  }



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
        setUploaded(true)

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
    <div className='h-screen mask-image: linear-gradient(transparent, black) '>

      <div className='text-center'>
        
        <h1 className='px-28'><TextType text='Welcome to VibeCheck!!' /></h1> 
        <p className='text-3xl m-4 px-28 text-white'>Your go-to tool for Image validation!</p>
        <p className='px-28 text-xl'>Ensure your uploaded images breeze through security checks for <span className='text-sky-400'>Official Documents</span>  while guaranteeing <span className='text-sky-400'>Top-Notch Aesthetics</span> for social media. Stay confident that your visuals are both secure and visually appealing with <span className='text-sky-400'>VibeCheck</span></p>
      </div>

      <div className=' flex flex-col items-center justify-center h-[50%] '>
        {uploaded && <img src={cloudURL} className='w-96 h-96 object-cover object-center border-white border-2 border-solid p-6 rounded-xl shadow-xl shadow-sky-300'></img>}

        {!uploaded && (<form className=' '>
                {!uploaded && <label htmlFor="imageUpload" className=' p-10 sm:p-40 text-6xl rounded-md border-2 border-dashed border-white hover:cursor-pointer'>Upload File</label>}
                <input type='file' id='imageUpload' className='hidden' onChange={uploadImage}></input>
          </form>)}
             
      </div>


      <div className='mx-auto flex items-center justify-center w-full'>
        <NavLink to={'/getstats'} ><button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold p-6 px-9 text-2xl rounded-full active:scale-95' onClick={test}>Scan Image</button></NavLink>
      </div>

    </div>
   
  )
}

export default Homepage