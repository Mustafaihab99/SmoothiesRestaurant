import React from "react";
import {useState} from 'react'; 
export default function ContactUs(){
    
    const [form , setForm] = useState({
    name:"",
    email:"",
    phone:"",
    });
    function handlechange(e){
        setForm({...form , [e.target.name] : e.target.value});
    }
    function submit(){
        if(form.name !== "" && form.email !== "" && form.phone !== "")
            window.location.href = "mailto:mustafaihab9@gmail.com?subject=Hello&body=I want to contact you";
    }
    return(
        <React.Fragment>
            <h2 className="title" id="contact" style={{marginTop : "80px" , width: "175px"}}>Contact US</h2>
            <div className="contactus">
                <form>
                    <input type="text"
                    name="name"
                    value={form.name}
                    onChange={handlechange}
                    placeholder="Name..."
                    required/>
                    <input type="email" 
                    name="email"
                    value={form.email}
                    onChange={handlechange}
                    placeholder="Email..." 
                    required/>
                    <input type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handlechange} 
                    placeholder="Phone..." 
                    required/>
                    <button onClick={submit}>Send</button>
                </form>
            </div>
        </React.Fragment>
    )
}