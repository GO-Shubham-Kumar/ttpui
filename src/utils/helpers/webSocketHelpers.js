import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStateData } from '../../redux/actions/mainStateDataActions';
import store from './../../redux/store';

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

export const sendDataToWebSocket =  (data) => {
    webSocket = new WebSocket('wss://2144-117-208-73-36.ngrok.io:901/wssresui')
        console.log('websocket conn', webSocket)
        console.log('store -- ', store)
        webSocket.onopen = () => {
            console.log('connected2 -- ', webSocket)
            webSocket.send(JSON.stringify(data))

            webSocket.onmessage = (event) => {
                console.log('event in 1',  event.data)
                if(event.data){
                    const stateData = JSON.parse(event.data);
                    console.log('event in 1', stateData);
                    if(stateData.state_data) store.dispatch(updateStateData(stateData))
                }
            }
            webSocket.onclose = (event) => {
                console.log('socket closed', event)
            }
        }
}

export default webSocket