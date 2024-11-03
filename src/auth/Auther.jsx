 
 
 
/* eslint-disable react/prop-types */
import { createContext,useEffect,useState, } from "react";
;



const HandleText=createContext()
 
function HandleProvider({children}) {
    const saveDet=localStorage.getItem("det")!==null?JSON.parse(localStorage.getItem("det")):[]
    const[det,setdet]=useState(saveDet)
    useEffect(()=>{
        localStorage.setItem("det",JSON.stringify(det))

    },[det])


    return(
        <HandleText.Provider value={{det,setdet,}}>{children}</HandleText.Provider>
    )
    
}
export{HandleText,HandleProvider}