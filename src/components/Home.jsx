import React, { useEffect } from 'react'


import Box from '../components/Box';

import { connect } from 'react-redux';
import { fetchPosts } from '../Action/PostActions';

const Home = (props) => {

    

   

    useEffect( ()=>{
        props.fetchPosts();
    },[]);

    return (
        
        <div style= {{ height:'auto',width:'100vw',background:'linear-gradient(to right, purple , lightyellow)'}} className="">

        <div className="row d-flex justify-content-center align-items-center h-100 w-100" >
          {
              Object.keys(props.cookies).map((cookie,i)=>(

                <div className=' box m-5 col-7' key={i}>
                <Box  name={props.cookies[cookie].title} value={props.cookies[cookie].title} body={props.cookies[cookie].body} id={props.cookies[cookie].id} >
                </Box>
               
                </div>
                
              ))
          }  
        </div>
        </div>
        
    )

    
}

const mapStateToProps = (state) =>({
    cookies : state.posts.items
});

export default connect(mapStateToProps , { fetchPosts})(Home);
