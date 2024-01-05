import { Dispatch, SetStateAction } from "react"

type CellProps = {
    id:number,
    go:string,
    setGo: ()=> Dispatch<SetStateAction<string>>,
    cells:string[],
    setCells:()=> Dispatch<SetStateAction<string>>
    cell:string  
    winingMsg:string 
}


const Cell = ({go,setGo,id,cells,setCells,cell,winingMsg})=>{
    const handelClick=(e)=>{
        if(winingMsg){
            return
        }
        const notTaken = !cells[id]
        if(notTaken){
            if(go === "circle"){
            handelCellChange("circle")
            setGo("cross")

            }else if(go === "cross"){
            handelCellChange("cross")
            setGo("circle")
            }
        }
        
    }
    const handelCellChange=(cellToChange:string)=>{
        let copyCells = [...cells]
        copyCells[id]=cellToChange
        setCells(copyCells)
    }
    return <div className="square" onClick={handelClick} >
        <div className={cell}> {cell? (cell === "circle" ? "o":"x"):""} </div>
    </div>

}

export default Cell