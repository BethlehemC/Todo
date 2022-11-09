import { useEffect } from "react";
import { useState } from "react";

const Login = () => {
const [email,setEmail]=useState("");
const [pass,setPass]=useState("");


function handelLogin(e){
    e.preventdefault();
console.log(email);
console.log(pass);
document.getElementById("login").reset();


}




return (
<div>


    <form  onSubmit={handelLogin}  id="login">
<label htmlFor="email">Email</label>
<input type="email"
required
autoComplete="off"
id="email"
value={email}
onChange={e=>setEmail(e.target.value)}
/><p></p>
<label htmlFor="password">Password</label>
<input type="password"
required
autoComplete="off"
id="password"
value={pass}
onChange={e=>setPass(e.target.value)}
/><p></p>
<button>Login</button>
<p>{email}</p>
<p>{pass}</p>


    </form>
</div>

      );
}
 
export default Login;
