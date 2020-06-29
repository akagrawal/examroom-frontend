import {socket, lobbychannel} from "./socket.js"
let username  = document.getElementById("username");
let password  = document.getElementById("password");
let loginbutton = document.getElementById("loginbutton");
loginbutton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("username:"+ username.value +" password:"+ password.value)
    document.getElementById("login_errormsg").style.display = "none"
    lobbychannel.push("login", {"userid":username.value, "password":password.value})
    .receive("ok", (msg) => {
        console.log(msg)
        window.location.replace("./pages/home.html")
    })
    .receive("error", (response)=>{
        document.getElementById("login_errormsg").style.display = "inline-block"
        document.getElementById("login_errormsg").innerHTML = response.msg
        console.log("reason:",response)
    })
})

function disableChannel(channel){
    channel.leave()
}
