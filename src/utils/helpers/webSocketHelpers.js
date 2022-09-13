import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

let webSocket = new WebSocket('wss://192.168.9.159/wssresui');
// const dispatch = useDispatch();
// export const initialseWSConn = () => {
//     webSocket = new WebSocket('wss://192.168.9.159/wssresui');
//     console.log('webSocket' , webSocket);
//     return webSocket;
// }

// // webSocket.onopen = () => {
//     // console.log('connected')
//     webSocket.onmessage = (event) => {
//         console.log('event', event)
//     }
// // }
// export const traceWSMessage =() => {
    
// }
console.log('connected -- ', webSocket.readyState)

export const sendDataToWebSocket =  (data) => {
    setTimeout(()=>{
        console.log('websocket conn', webSocket)
        // if(webSocket.readyState === 0){
        //     webSocket.onopen = () => {
        //         webSocket.send(JSON.stringify(data))
        //         console.log('connected2 -- ', webSocket)
        //         console.log('connected1-- ', data, webSocket.readyState)
        //         webSocket.onmessage = (event) => {
        //             console.log('event in 1', event)
        //         }
        //     }
        // }
        // else{
            console.log('connected121 -- ', webSocket)
            webSocket.send(JSON.stringify(data))
            console.log('connected1-- ', data, webSocket.readyState)
            webSocket.onmessage = (event) => {
                console.log('event in 1', event)
            }
    //     }
    }, 1000)
}

export default webSocket