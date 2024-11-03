/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react'
import {Link} from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { HandleText } from '../auth/Auther';
import { FaPlay } from "react-icons/fa6";
import ReactPlayer from 'react-player'
const Details = () => {
    const [video,setvideo]=useState(false)
    const{det,setdet,imgref}=useContext(HandleText)
    const ref=useRef()
    const del=(id)=>{
        let remove=det.filter((Data)=>Data.id!==id)
        setdet(remove)

    }
    useEffect(()=>{
        const handle=(e)=>{
            if (e.target==ref.current) {
                setvideo(false)
                
            }
        }
        const detectkey=(e)=>{
              
            if (e.key=="Escape") {
                
                setvideo(false)
                
            }
    
        }
        window.addEventListener("keydown",detectkey)
        window.addEventListener("musedown",handle)
        return()=>{
            window.removeEventListener("keydown",detectkey)
            window.removeEventListener("mousedown",handle)
        }


    },[])
    
    
 
   
    
  return (
    <>
     <div className="nav">
        <ul>
            <Link to="/">home</Link>   
        </ul>
    </div>
    <div   className="seedetails">
        {det.map((Data,i)=>(

<Card className='card-two'  key={i} sx={{ maxWidth: 550,height:"800px" }}>
      <CardMedia className='image' 
        sx={{ height: 500 }}
        image={Data.img}
        title={Data.img}
      />
      <CardContent>
        <Typography className='title' gutterBottom variant="h5" component="div">
          {Data.title}.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {Data.description}
        </Typography>
      </CardContent>
      <h3 style={{marginInlineStart:"20px"}}>price:{Data.price}$</h3>
      <CardActions>
        <div className="btn">
            <button onClick={()=>del(Data.id)}>remove</button>
        </div>
      </CardActions>
    </Card>

        ))}
    

 
    </div>
    {video &&
     <div onClick={()=>setvideo(false)} className="video-player">

     <ReactPlayer playing={true} width="80%" height="80%" url='https://www.youtube.com/watch?v=MCb13lbVGE0' />
     </div>
    
    
    }
    <div className="section-video">
        <div onClick={()=>setvideo(true)} className="icon-player">
        <FaPlay className='icon' />

        </div>
    </div>
   

    </>
  )
 
  
}

export default Details