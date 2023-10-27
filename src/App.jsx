import { useState } from 'react'
import './App.css'
import Logings from './Logings/Logings'
import Prompt from './Prompt/Prompt'


function App() {
 const [logs,setLogs] = useState([])
 const [showPromot, setShowPrompt] = useState(false)
 const [infor,setInfor] = useState("")

 const onClickRegister = async ()=>{
  setLogs((currentLogs)=>{
    return [...currentLogs,"Processing data"]
  })

  const res = await fetch("https://dms-ul-fs-api.onrender.com/register_qoute_deals",{
    method : "GET",
    mode: "no-cors",
    headers: {"Content-Type": "application/json"},
  })
  const data = await res.json()


   if(data.status == 1){
    setLogs((currentLogs)=>{return[...currentLogs,data.message]})
    setLogs((currentLogs)=>{return[...currentLogs,"Quotes to resigter"]})
    for(let i = 0; i< data.data.length; i++){
      setLogs((currentLogs)=>{return[...currentLogs,data.data[i].QuoteNumber]})
    }
    setInfor(data.data)
    setShowPrompt(true)
  }
  else if (data.status == 2){
    setLogs((currentLogs)=>{return[...currentLogs,data.message]})
  }
  else{
    setLogs((currentLogs)=>{return[...currentLogs,data.message]})
  }
 }

 const onClickPromptYes = async()=>{
  console.log(infor)
  const res = await fetch("https://dms-ul-fs-api.onrender.com/create_deals",{
    method : "POST",
    mode: "no-cors",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(infor) 
  })
  const data = await res.json()
  if (data){
    setLogs((currentLogs)=>{return[...currentLogs,"Deals registered"]})
  }
  else{
    setLogs((currentLogs)=>{return[...currentLogs,"Deals not registered"]})
    setShowPrompt(false)
    setLogs([""])
  }
 }

 const onClickPromptNo = ()=>{
  setShowPrompt(false)
  setLogs([""])
 }
  return (
    <>
     <h1>DMS UL-FS</h1>
     <button onClick={onClickRegister}>Register quotes from UL as deals on FS</button>
     <Logings logs={logs}/>
     {showPromot?<Prompt onClickPromptYes = {onClickPromptYes} onClickPromptNo = {onClickPromptNo} />:""}
    </>
  )
}

export default App
