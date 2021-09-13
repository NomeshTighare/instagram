import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';


const Signup = ()=>{
  
    const history = useHistory();
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const PostData = ()=>{
      if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})
      }
     fetch("/signup",{
       method:"post",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify({
         name,
         password,
         email
       })
     }).then(res=>res.json())
     .then(data=>{
      if(data.error){
        M.toast({html: data.error, classes: 'rounded #64b5f6 blue lighten-2'});
      } else {
        M.toast({html: data.message, classes: 'rounded #43a047 green darken-1'});
        history.push('/signin');
      }
     })
    }
  return(
    <div className="mycard">
    <div className="card auth-card input-filed">
        <h2 className="brand-logo">Instagram</h2>
        <h4>Sign Up</h4>
        <br/>
        <input type="text"
        placeholder="Username" value={name} onChange={e=>setName(e.target.value)}/>
         <br/>
        <input type="text"
        placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)}/>
         <br/>
        <input type="text"
        placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
         <br/> <br/>
        <button className="btn waves-effect waves-light #064b5f6 blue lighten-2" type="submit" name="action" onClick={()=>PostData()} >Sign Up</button>
        
        <h6> Have an account? <Link to="/signin"><b>Log in</b></Link></h6>
      
    </div>
</div>
  )
}

export default Signup
