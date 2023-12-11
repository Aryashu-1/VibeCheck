
import { useEffect, useState } from 'react'
import React from 'react'

const TextType = (props) => {

    let [text,setText] = useState("")
    let [i,seti] = useState(0)
    const len = props.text.length


    useEffect(() => {
        setTimeout(()=>{
            seti((i+1)%len);
            let textcpy = props.text.slice(0,i+1);
            setText(textcpy)
        },250)
        

    },[text,i,len,props.text])


  return <h1 className='text-center text-5xl text-white font-mono font-extrabold'>{text + "|"}</h1>

}

export default TextType