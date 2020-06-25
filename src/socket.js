
import {Socket} from "../node_modules/phoenix/assets/js/phoenix.js"
console.log("someone entered")
let socket = new Socket("ws://182.68.201.114:4000/socket", {params: {"user": "123"}})
socket.connect()
export {socket}