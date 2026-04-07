import Button from './Button'
import '../Css/Login.css'
import  axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
function Login(){
    let navigate=useNavigate()
     let userref=useRef();
     let passwordref=useRef();
     const userCredentials={
            username:userref.current?.value,
            password:passwordref.current?.value
        }
     const login=(userCredentials)=>{
       console.log(userCredentials)
         let login_url="http://127.0.0.1:8000/api/loginapi/"
        axios.post(login_url,userCredentials).then((resp)=>{navigate("/")}).catch((err)=>{console.log(err)})
   }
       
   const signinbtnclick=(userCredentials)=>{
    
      
        console.log('from signin',userCredentials)
        
        const post_url="http://127.0.0.1:8000/api/userregisterapi/"
        axios.post(post_url,userCredentials).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)})
   }
      return(
        <div className="login-div">
            <input ref={userref} placeholder='UserName' type="text"/>
            <input ref={passwordref} placeholder='Password' type="password"/>
            <hr/>
            <Button fun={()=>login(userCredentials)} name="Login"/>
            <hr/>
            <p>new user ? signin</p>
             <Button fun={()=>signinbtnclick(userCredentials)} name="Signin"/>
        </div>
    )
}
export default Login;