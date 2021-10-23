import React from 'react'
import { useState,useEffect } from 'react'
import list from '../services/CookiesService';
import Box from '../components/Box';


const Home = () => {

    const [cookies,setCookies]=useState({});

   

    useEffect(()=>{

        list.then(data =>{
            //cookies = data;
            setCookies(data.data);
            console.log(data.data);
        })

    },[]);

    return (
        
        <div style= {{ height:'auto',width:'100vw',background:'linear-gradient(to right, purple , lightyellow)'}} className="">
        <div className="row d-flex justify-content-center align-items-center h-100 w-100" >
          {
              Object.keys(cookies).map((cookie,i)=>(

                <div className=' box m-5 col-7' key={i}>
                <Box  name={cookies[cookie].title} value={cookies[cookie].body} >

                
                
                </Box>
                
                </div>
                
              ))
          }  
        </div>
        </div>
        
    )
}

export default Home
