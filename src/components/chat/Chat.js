import React, { useEffect, useState } from 'react'
import {user} from '../Join/Join'
import socketIO from 'socket.io-client'
import './chat.css'
import { Message } from '../message/message'
import ReactScrollToBottom from 'react-scroll-to-bottom'

const ENDPOINT = 'http://localhost:4500/'

export const Chat = () => {
  const socket = socketIO(ENDPOINT, {transports : ['websocket']});
  
  const [id, setid] = useState('');

  const [messages, setmessages] = useState([]);


  const send = ()=>{
    const message = document.getElementById('chatInput').value;
    socket.emit('message', {message, id})
    document.getElementById('chatInput').value= "";
  }

    

    useEffect(() => {


      const socket = socketIO(ENDPOINT, {transports : ['websocket']});


      socket.on('connect', ()=>{
        setid(socket.id);
        
      })

      socket.emit('joined', {user})

      socket.on('welcome', (data)=>{
        setmessages([...messages, data]);
        console.log(data.user, data.message);
      })

      socket.on('userJoined', (data)=>{
        setmessages([...messages, data]);
        console.log(data.user, data.message);
      })

      
      return () => {
      socket.off();
        
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      socket.on('sendMessage', (data)=>{
        setmessages([...messages, data]);;

      })
      return () => {
        
        socket.off();
          
        }
    
       // eslint-disable-next-line
    }, [messages])
    
    



  return (
    <>
    <div className="chatPage">
        <div className="chatContainer">
            <div className="header">
              <a href="/"> Login </a>
            </div>
              <ReactScrollToBottom className="chatBox">
              
             {messages.map((item, index)=>(
              <Message classs={item.id === id ? 'right' : 'left'} user={item.id=== id? '': item.user} message={item.message} key={index}/>
             ))}



            </ReactScrollToBottom>
            <div className="inputBox">
                <input onKeyDown={(event)=> event.key=== 'Enter'? send(): null} type="text" placeholder='Type something...' id='chatInput' />
                <button onClick={send}>SEND</button>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
