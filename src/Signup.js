import { useState } from "react";
//import { useHistory } from "react-router-dom";
const Signup = () => {
const [username,setUsername]=useState(" ");
const [Email,setEmail]=useState(" ");
const[password,setPassword]=useState(" ")
const [confirm,setconfirm]=useState(" ")
//const history=useHistory()

    function handelsubmit(e){
e.preventDefault()
const allValue={username,Email,password,confirm}

fetch( '   http://localhost:3001/users',{
    method: 'POST',
    headers:{'content-Type':"application/json"},
    body:JSON.stringify(allValue)

}
).then(
    ()=>{
        setEmail("");
        setPassword("");
        setconfirm("");
        setUsername("")
        
    }

)




    }
    
    
    
    
    
    return ( 
    <div className="signup">
        <h1>signup</h1>

<form action="" className="signupform" onSubmit={handelsubmit}>
<label htmlFor="">USERNAME</label>
<input type="text" placeholder=" eg.Bethlehem Chali" 
value={username}
onChange={(e)=> setUsername(e.target.value)}
/>
<label htmlFor="">Email</label>
<input type="text" placeholder="xxxx@gmail.com" 
value={Email}
onChange={(e)=>setEmail(e.target.value)}
/>
<label htmlFor="">Password</label>
<input type="password" placeholder="****" 
value={password}
onChange={(e)=>setPassword(e.target.value)}

/>
<label htmlFor="">confirm passwored</label>
<input type="password" placeholder="****"
value={confirm}
onChange={(e)=>setconfirm(e.target.value)}

/>
<button>Signup</button>
</form>
    </div>






     );
}
 
export default Signup;