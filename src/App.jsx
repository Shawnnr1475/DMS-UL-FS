import { useState } from 'react'
import './App.css'
import Logings from './Logings/Logings'
import Prompt from './Prompt/Prompt'


function App() {
 const [logs,setLogs] = useState([])
 const [showPromot, setShowPrompt] = useState(false)

 const onClickRegister = async ()=>{
  setLogs((currentLogs)=>{
    return [...currentLogs,"Processing data"]
  })

  const res = await fetch("https://dms-ul-fs-api.onrender.com/register_qoute_deals")
  const data = await res.json()

   if(data.status == 1){
    setLogs((currentLogs)=>{return[...currentLogs,data.message]})
    setLogs((currentLogs)=>{return[...currentLogs,"Quotes to resigter"]})
    for(let i = 0; i< data.data.length; i++){
      setLogs((currentLogs)=>{return[...currentLogs,data.data[i].QuoteNumber]})
    }
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
  const res = await fetch("https://dms-ul-fs-api.onrender.com/create_deals",{
    method : "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(logs) 
  })
  const data = await res.json()
  console.log(data)
 }

 const onClickPromptNo = ()=>{
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
