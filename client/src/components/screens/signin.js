import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css';

    const Signin = () => {
        const {state,dispatch} = useContext(UserContext)
        const history = useHistory();
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const PostData = () => {
          
            if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                M.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})
            
       
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.error){
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" });
                }
                else {
                    localStorage.setItem("jwt",data.token);
                    localStorage.setItem("user",JSON.stringify(data.user));
                    dispatch({type:"USER",payload:data.user});
                    M.toast({ html: "signin success", classes: "#43a047 green darken-1" });
                    history.push('/');
                }
            })
        }
            else{
                M.toast({html: "Invalid Email Address", classes: 'rounded #64b5f6 blue lighten-2'});
            }
        }
  return(
      <div className="mycard">
          <div className="card auth-card input-filed">
              <h2 className="brand-logo">Instagram</h2>
            
              <h4>Sign In</h4>
              <br/>
              <input type="text"
              placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               <br/>
              <input type="text"
              placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
               <br/> <br/>
              <button className="btn waves-effect waves-light #064b5f6 blue darken-1" onClick={()=>PostData()}>Login</button>
              <h6> Don't have an account? <Link to="/signup"><b>Sign up</b></Link></h6>
          </div>
      </div>
  )
  }

export default Signin