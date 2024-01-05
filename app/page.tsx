"use client"
import { useEffect, useState } from "react"
import Cell from "./components/cell"

      
const winingCombo = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


export default function Home() {
  const [cells,setCells] = useState(["","","","","","","","",""])
  const [go,setGo] = useState("circle")
  const [winingMsg,setwiningMsg] = useState("")
  
  useEffect(()=>{
    winingCombo.forEach((combo) => {
      const circlewins = combo.every((cell) => cells[cell] === "circle")
      const crosswins = combo.every((cell) => cells[cell] === "cross")
      if(circlewins){
        setwiningMsg("cirle Win")
      }else if(crosswins){
        setwiningMsg("cross Win")
      }
    })
  },[cells])

  useEffect(()=>{
    if(cells.every((cell)=> cell!== "") && !winingMsg){
      setwiningMsg("Draw")
    }
  },[cells,winingMsg])
  return (
   
    <main  className="main">
      <div className="gameboard">
       {cells.map((cell, index) =>(
         <Cell key={index} setGo={setGo} go={go} id={index} cells={cells} setCells={setCells} cell={cell} winingMsg={winingMsg} />
       ))}
      </div>
      <div>{winingMsg}</div>
      {!winingMsg && <div>{`its now ${go} turn!`}</div>}
    </main>
  )
}
