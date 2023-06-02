import React, {useState} from 'react';
import './App.css';
import { FullInput } from './components/FullInput';
import {Button} from './components/Button'
import {Input} from './components/Input'

type MessageType={
    message:string
}



function App() {
    let [message, setMessage] = useState(Array<MessageType>)

    let [title, setTitle] = useState("")
    console.log(title);
    

   const addMessage =(title:string)=>{
        let newMessage={message:title}
        setMessage([...message,newMessage])
    } 
    
    const callBackButtonHandler=()=>{
        addMessage(title)
        setTitle("")
    }

return(
    <div>
       <Input title={title} setTitle={setTitle}/>
       <Button name="+" callBack={callBackButtonHandler}/>       
        {/*<FullInput addMessage={addMessage}/>*/}

        {message.map((el:MessageType,index:number) => {
            return(
              <div key="index">{el.message}</div>  
            )
        })}
    </div>
) 
}
export default App;