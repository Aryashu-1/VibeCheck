import './App.css';
import axios from "axios"
import { useState } from 'react';

/* import {Cloudinary} from "@cloudinary/url-gen"; */

function App() {


  let [cloudURL,setCloudURL] = useState('')
  let [requestId,setRequestId] = useState('')




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
        'X-RapidAPI-Key': '1b2a16a073msh8b8172ab2cb9c94p17a6efjsnc20dcbb6fc2d'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error); 
    }
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
        'X-RapidAPI-Key': '1b2a16a073msh8b8172ab2cb9c94p17a6efjsnc20dcbb6fc2d'
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
      <h1>Hello</h1>
      <form>
        <input type='file' onChange={uploadImage}></input>
      </form>
      { cloudURL && (<img src={cloudURL}></img>)}
      
      <button onClick={postImageAndGetRequestId}>PostImage and get Id </button>
      <button onClick={getImagesStats}>Get image stats</button>
    </div>
      
  );
}

export default App;
