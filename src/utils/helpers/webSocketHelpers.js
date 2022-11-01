import { handleLoginError, logOutAction } from '../../redux/actions/authActions';

import { WEBSOCKET_ERROR } from '../constants';
import store from './../../redux/store';
import { updateStateData } from '../../redux/actions/mainStateDataActions';

console.log('window', window)
const { WEBSOCKET_IP } = window.globalConfigs;
let webSocket = new WebSocket(WEBSOCKET_IP);
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
    webSocket = new WebSocket(WEBSOCKET_IP)
        webSocket.onopen = () => {
            webSocket.send(JSON.stringify(data))

            webSocket.onmessage = (event) => {
                if(event.data){
                    const stateData = JSON.parse(event.data);
                    if(stateData.state_data) store.dispatch(updateStateData(stateData))
                }
            }
            webSocket.onclose = (event) => {
                console.log('socket closed', event)
            }

        }
        webSocket.onerror = (event) => {
            console.error('socket error', event)
            // store.dispatch(logOutAction({message : WEBSOCKET_ERROR }))
        }
}

export default webSocket