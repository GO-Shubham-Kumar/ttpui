import { DEFAULT_LANGUAGE } from "../constants"
import { wrappedFetch } from "../fetchFuncs"
import { SCREEN_NAVGATIONS } from "../navConfig"
import { serverMessages } from "../server_meesages"

export const getMsgObject = (data) => {
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
    let i=0;
    let previousData = {};
    let dataObj = {}
    for(i;i<displayData.length;i++){
        let val = ''
        if( displayData[i] && displayData[i][0] && displayData[i][0]['display_data'].length > 0){
            const dispData=displayData[i][0]; 
            Object.keys(dispData).map((key, j) =>{
                if(key === 'display_data'){
                    dataObj = dispData[key][0];
                    console.log('dataObj', dataObj)
                    val = dataObj['display_name']
                    previousData[val] = ''
                }else{
                    console.log('--previous',previousData, val, dispData[key])
                    previousData[val] = dispData[key]
                }
            })
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
    let data = SCREEN_NAVGATIONS[mode] || [];
    data = data[screenId] || [];
    data = data.length > 0 ? data.map((obj, i) => {
        if(obj.active) return {...obj, description : getServerMsg.value }
        return obj
    }) : data
    return data
}


// simplify details comming from server
export const fetchDetailsFromData = (data) => {
    const displayData = data || [];
    let i=0;
    let previousData = {};
    let dataObj = {}
    for(i;i<displayData.length;i++){
        let val = ''
        if( displayData[i] && displayData[i][0] && displayData[i][0]['display_data'].length > 0){
            const dispData=displayData[i][0];  //array always contains one record as an object
            Object.keys(dispData).map((key, j) =>{  //loop through the object
                if(key === 'display_data'){ //display_data consist of the key details
                    dataObj = dispData[key];
                    dataObj = dataObj.filter((d, i) => {
                        return d['locale'] === DEFAULT_LANGUAGE
                    })
                    dataObj = dataObj[0];
                    val = dataObj['display_name']
                    previousData[val] = ''
                }else{ //get value from the other key
                    let dataVal= ''
                    if(typeof dispData[key] === 'string' ) dataVal = dispData[key]
                    else if(Array.isArray(dispData[key])){
                        if(Array.isArray(dispData[key][0])) dataVal = dispData[key][0].toString()
                        else dataVal = dispData[key][0]
                    } 
                    previousData[val] = dataVal
                }
            })
        }
    }
    return previousData
}

export const capitalizeFirstLetter = (string)  => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

export const createNotificationObject = (text, level) =>{
    return { 
        description : text,
        level
     }
}