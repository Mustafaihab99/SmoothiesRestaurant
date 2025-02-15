import React, { useState } from "react";
import FormBar from "./FormBar";

export default function SignUp(){
    const[name , setName] = useState("");
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const[confpass , setConfpass] = useState("");
    const[accept , setAccept] = useState(false);
    let flag = false;
    function submit(e){
        e.preventDefault();
        setAccept(true);
    if(name === "" || password.length < 8 || email === "" || confpass !== password)
        flag = true;
    if(!flag)
        window.location.pathname ="/menu";
    }
    return(
        <div style={{
            backgroundColor: 'rgb(238 219 183 / 37%)'
            ,height:"100vh"
            }}>
        <FormBar/>
        <div className="signup">
            <form>
                <h2>Sign UP</h2>
                <div>
                <input type="text" 
                placeholder="Enter Name..." 
                value={name} 
                onChange={(e)=>setName(e.target.value)}/>
                {accept && name === "" && <span className="error">Name Can not be Empty</span>}
                </div>

                <div>
                <input type="email"
                placeholder="Enter Email..."
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                {accept && email === "" && <span className="error">Email Can not be Empty</span>}
                </div>

                <div>
                <input type="password"
                placeholder="Enter Password..."
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                {accept && password.length < 8 && <span className="error">Password must more than 8 Char</span>}
                </div>
                
                <div>
                <input type="password" 
                placeholder="Enter Confarmation Password..."
                value={confpass}
                onChange={(e)=>setConfpass(e.target.value)}
                />
                {accept && password !== confpass && <span className="error">Conformation Password don't Equal Password</span>}
                </div>
                
                <button onClick={submit}>Register</button>
            </form>
        </div>
        </div>
    )
}