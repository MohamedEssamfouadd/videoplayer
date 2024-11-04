/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { IoMdPerson } from "react-icons/io";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getAllproduct } from '../Redux/Slice';
import {json, Link, useNavigate} from "react-router-dom";
import { HandleText } from '../auth/Auther';
import { imageListItemClasses } from '@mui/material';


const Home = () => {
const {det,setdet}=useContext(HandleText) 
const saveImg=localStorage.getItem("img")!==null?localStorage.getItem("img"):undefined;
const saveName=localStorage.getItem("name")!==null?localStorage.getItem("name"):"";
const saveAge=localStorage.getItem("age")!==null?localStorage.getItem("age"):"";
const[img,setimg]=useState(saveImg)
    const[name,setname]=useState(saveName)
    const[age,setage]=useState(saveAge)
    const navigate=useNavigate()
    const{product}=useSelector((state)=>state.products)
    const dispatch=useDispatch()

    const viewimg=(e)=>{
        const reader=new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.addEventListener("load",()=>{
            const url=reader.result
            setimg(url)
            if (img !==undefined || img!==null || img !== "") {
                 setname(prompt("what's your Name"))
                 setage(prompt("your Age")) 
            }
           
        })
        
        
    }

   useEffect(()=>{
    dispatch(getAllproduct())
   
    if (img!==undefined) {
        localStorage.setItem("img",img)
        localStorage.setItem("name",name)
        localStorage.setItem("age",age)
      
    }
    if (name==null||age==null) {
       alert("you need write your Name and your Age")
       setname(prompt("what's your Name"))
       setage(prompt("your Age")) 
   }

    },[dispatch,img,name,age])

     const handleclick=([img,title,description,price,id])=>{
            setdet([...det,{img,title,description,price,id}])
            window.scrollTo({
                top:0
            })
            
            navigate("details")
           
        }

  return (
    <>
    {
        img==undefined?

 <div className="person">
    <input onChange={viewimg} style={{paddingBottom:"10px"}} type="file" />
        <div className="photo">
            {<IoMdPerson style={{width:"100%",height:"100%",}} />}
        </div>
        <div className="info">
            <h3>name:</h3>
            <h3>age:</h3>
        </div>
    </div>:

<div className="person">
<input onChange={viewimg} style={{paddingBottom:"10px"}} type="file" />
    <div className="photo-img">
        <img src={img} alt="personal-photo" />
    </div>
    <div className="info">
        <h3>name:<span>{name}</span></h3>
        <h3>age:<span>{age}</span></h3>
    </div>
</div>


    }
    <div className="nav">
        <ul>
          
            <Link to="details">Details</Link>
           
        </ul>
    </div>
    <div className="container">
        {product.map((Data,i)=>(

  <Card className='card' key={i} sx={{ maxWidth: 400,height:"650px" }}>
      <CardMedia className='image' 
        sx={{ height:340, }}
        image={Data.image}
        title={Data.title}
      />
      <CardContent>
        <Typography  className='title' gutterBottom variant="h6" component="div">
          {Data.title.substring(0,30)}...
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        { Data.description.substring(0,250)}...
        </Typography>
      </CardContent>
        <h3 style={{marginInlineStart:"20px"}}>price:{Data.price}$</h3>
      <CardActions>
        <div onClick={()=>handleclick([Data.image,Data.title,Data.description,Data.price,Data.id])} className="btn">

       <button>see details</button>
        </div>
      </CardActions>
    </Card>


        ))}
  

    </div>
   
    </>
   
  )
}

export default Home