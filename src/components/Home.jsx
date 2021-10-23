import React from 'react'
import { useState,useEffect } from 'react'
import list from '../services/CookiesService';
import Box from '../components/Box'

const Home = () => {

    const [cookies,setCookies]=useState({});

    useEffect(()=>{

        list.then(data =>{
            //cookies = data;
            setCookies(data);
        })

    },[]);

    return (
        
        <div className="container  d-flex justify-content-center align-items-center h-100" style= {{ height:'100vh'}}>
          {
              Object.keys(cookies).map((cookie,i)=>(

                <div className='col-10 box '>
                <Box id={i} name={cookie.name} value={cookie.value} />
                </div>
                
              ))
          }  
        </div>
        
    )
}

export default Home
