import { wrappedFetch } from "../fetchFuncs"
import { SCREEN_NAVGATIONS } from "../navConfig"
import { serverMessages } from "../server_meesages"

export const getMsgObject = (data) => {
    console.log('msg server', data)
    return data ? data[0] : {}
}

//to manulupulate the header message comming from the server
//@data - exptected the header_msg_list array
export const manupulateServerMessges = (data) => {
    let placeHolder;
    const msgObj = getMsgObject(data);
    const { code, details } = msgObj;
    let msgData = { value: '', key: " "  }
    if(!code || !details) return msgData
    let msg = serverMessages[code];
    console.log('code, details', code, details );
    if( code && details && details.length > 0 ){
        msg = msg.replace(/{\w+}/g, function (everyPlaceholder) {
            placeHolder = everyPlaceholder.match(/\d+/g)
            return details[placeHolder]
        })
    } 
    
    msgData = { value: msg, key: " "  }
    return msgData
}


//simplify previous put details
export const getPreviousDetailsData = (data) => {
    const displayData = data || [];
    console.log('displayData', displayData)
    let i=0;
    let previousData = {};
    let dataObj = {}
    for(i;i<displayData.length;i++){
        console.log('i--',i, displayData[i][0]);
        if( displayData[i] && displayData[i][0] && displayData[i][0]['display_data'].length > 0){
            dataObj = displayData[i][0]['display_data'][0];
            console.log('dataObj', dataObj)
            previousData[dataObj['display_name']] = ''
        }
    }
    return previousData
}

//simplify current put details
export const getCurrentDetailsData = (data) => {
    const displayData = data && Object.keys(data).length > 0 ? data : {};
    let i=0;
    let currentData = {};
    let dataObj = {};
    let val = ''
    Object.keys(displayData).map((d,i)=>{
        console.log('displayData', typeof displayData[d])
        // if(typeof displayData[d] === "string") currentData[d] = displayData[d]
        if(typeof displayData[d] === "object" ) {
            if(displayData[d].hasOwnProperty('total_qty')) {
            //     currentData[d] = displayData[d] = `${displayData[d]['put_qty']}/${displayData[d]['total_qty']}`
            }else{
                val = displayData[d]['display_data'][0]['display_name']
                currentData[val]= displayData[d]['value'] || "---"

            }
        }
    })
    return currentData
}

export const getNavConfig = (headerMsgs, mode, screenId) => {
    const getServerMsg = manupulateServerMessges(headerMsgs);
    let data = SCREEN_NAVGATIONS[mode];
    console.log('data nav', data, screenId)
    data = data[screenId] || []
    data = data.length > 0 && data.map((obj, i) => {
        console.log('nav msgs', obj )
        if(obj.active) return {...obj, description : getServerMsg.value }
        return obj
    })
    return data
}

