import { useEffect, useState } from "react";
const TIMER=3000
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const[timeRemaining,setTimeRemaining]=useState(TIMER)
   useEffect(()=>{
    const intervel=setInterval(()=>{
      setTimeRemaining(prevTime=>prevTime-10)
    },10)
  return ()=>{
    clearInterval(intervel)
  }
  },[])


  useEffect(()=>{
    const timer=setTimeout(()=>{
      onConfirm()
    },TIMER)
  return ()=>{
    clearTimeout(timer)
  }
  },[onConfirm])
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={timeRemaining} max={TIMER}/>
    </div>
  );
}
