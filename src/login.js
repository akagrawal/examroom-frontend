import {socket} from "./socket.js"
let username  = document.getElementById("username");
let password  = document.getElementById("password");
let loginbutton = document.getElementById("loginbutton");
let channel = null
loginbutton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e)
    console.log("username:"+ username.value +" password:"+ password.value)
    channel = socket.channel("room:exam", {"userid":username.value, "password":password.value})
    channel.join()
    .receive("ok", ()=>{console.log("helll")})
    .receive("error", (reason)=>{
        document.getElementById("errormsg").style.display = "inline-block"
        document.getElementById("errormsg").innerHTML = "username password do not match"
        console.log("reason:",reason)
        disableChannel(channel)
    })
})

function disableChannel(channel){
    channel.leave()
}
