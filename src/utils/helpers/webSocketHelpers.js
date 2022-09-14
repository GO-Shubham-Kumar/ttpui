import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

let webSocket ;
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

export const sendDataToWebSocket =  (data) => {
        webSocket = new WebSocket('wss://192.168.9.159/wssresui');
        console.log('websocket conn', webSocket)
        webSocket.onopen = () => {
            console.log('connected2 -- ', webSocket)
            webSocket.send(JSON.stringify(data))
            
            webSocket.onmessage = (event) => {
                console.log('event in 1', event)
            }
        }
}

export default webSocket