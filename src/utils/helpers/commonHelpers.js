import { DEFAULT_LANGUAGE } from "../constants"
import { SCREEN_NAVGATIONS } from "../navConfig"
import { serverMessages } from "../server_meesages"
import { wrappedFetch } from "../fetchFuncs"

export const getMsgObject = (data) => {
    return data ? data[0] : {}
}

//to manipulate the header message coming from the server
//@data - expected the header_msg_list array
export const manupulateServerMessges = (data) => {
    let placeHolder;
    const msgObj = getMsgObject(data);
    const { code, details } = msgObj;
    console.log('code', code)
    let msgData = { value: '', key: " "  }
    if(!code) return { msgData }
    let msg = serverMessages[code];
    console.log('server msg', msg)
    if(!msg || details.length === 0){
        msgData['value'] = msgObj['description']
        return { msgData, msgObj }
    } 
    console.log('server msg 2', msg, details, code )
    if( code && details && details.length > 0 ){
        console.log('1--', msg)
        msg = msg.replace(/{\w+}/g, function (everyPlaceholder) {
            placeHolder = everyPlaceholder.match(/\d+/g)
            console.log('details placeHolder', details, placeHolder, details[placeHolder] )
            return details[placeHolder]
        })
    } 
    msgData = { value: msg, key: " "  }
    return { msgData, msgObj }
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
            const itemData=displayData[i][0]; 
            Object.keys(itemData).map((key, j) =>{
                if(key === 'display_data'){
                    dataObj = itemData[key][0];
                    console.log('dataObj', dataObj)
                    val = dataObj['display_name']
                    previousData[val] = ''
                }else{
                    console.log('--previous',previousData, val, itemData[key])
                    previousData[val] = itemData[key]
                }
            })
        }else{
            console.log('display data', displayData[i])
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
    const { msgData } = manupulateServerMessges(headerMsgs);
    let data = SCREEN_NAVGATIONS[mode] || [];
    data = data[screenId] || [];
    data = data.length > 0 ? data.map((obj, i) => {
        if(obj.active) return {...obj, description : msgData.value }
        return obj
    }) : data
    return data
}


// simplify details coming from server
export const fetchDetailsFromData = (data) => {
    const displayData = data || [];
    let i=0;
    let previousData = {};
    let dataObj = {}
    for(i;i<displayData.length;i++){
        let val = ''
        if( displayData[i] && displayData[i][0] && displayData[i][0]['display_data'].length > 0){
            const itemData=displayData[i][0];  //array always contains one record as an object
            Object.keys(itemData).map((key, j) =>{  //loop through the object
                if(key === 'display_data'){ //display_data consist of the key details
                    dataObj = itemData[key];
                    dataObj = dataObj.filter((d, i) => {
                        return d['locale'] === DEFAULT_LANGUAGE
                    })
                    dataObj = dataObj[0];
                    val = dataObj['display_name']
                    previousData[val] = ''
                }else{ //get value from the other key
                    let dataVal= ''
                    if(typeof itemData[key] === 'string' ) dataVal = itemData[key]
                    else if(Array.isArray(itemData[key])){
                        if(Array.isArray(itemData[key][0])) dataVal = itemData[key][0].toString()
                        else {
                            dataVal = key.toLowerCase().includes('dimension') ? itemData[key].join(' x ') : itemData[key].toString()
                        }
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

export const fetchClientLogo = () => {
    const { REACT_APP_CUSTOMER_LOGO } = process.env;
    return REACT_APP_CUSTOMER_LOGO || ''
}
// export const parseNotificationsList () => {

// }

//get seat number from seat name 
export const getSeatNumber = (seatName) => {
    let seat_name = seatName || '';
    console.log('seat_name', seat_name)
    seat_name = seat_name ? seat_name.split("_")[1] : seat_name
    seatName = seat_name.length === 1 ? `0${seat_name}` : seat_name
    return seatName
}

export const setIdleLogoutEvent = (intervalRef) => {
    if(intervalRef) return clearTimeout(intervalRef);
    const idleLogout  = setTimeout(()=>{
    },3000)
    return idleLogout;
}

export const clearTimeoutEvent = (intervalRef) => {
    if(intervalRef.current) return clearTimeout(intervalRef.current);
}


//manipulate damaged_items array to pass the data to the table .
export const getDamagedItemsData = (damagedItems) => {
    var i =0;
    const damagedItemList = []
    let damagedItemData = {};
    // console.log('data',fetchDetailsFromData(damagedItems))
    let itemData;
    for(i;i<damagedItems.length;i++){
        itemData = damagedItems[i]
        Object.keys(itemData).map((key, j) =>{
            let damagedItem = itemData[key];
            if(Array.isArray(damagedItem)) {
                if(Array.isArray(damagedItem[0])){
                    let details  = fetchDetailsFromData(damagedItem)
                    damagedItemData= {...details, ...damagedItemData }
                }else{
                    damagedItemData[key] = ellipseMiddleText(damagedItem.join(''))
                } 
            }
            else damagedItemData[key] = damagedItem
        })
        if(damagedItemData['Product SKU']){
            damagedItemData['sku'] = ellipseEndText(damagedItemData['Product SKU'])
        }
        damagedItemList.push(damagedItemData)
    }
    console.log('damagedItemList', damagedItemList);
    return damagedItemList
}

//add ellipses (...) in the middle of the string
export const ellipseMiddleText = (text) => {
    let ellipsesText = text
    if (text.length > 11) {
      ellipsesText = `${text.substring(0, 5)}...${text.substring(text.length - 5, text.length)}`
    }
    return ellipsesText
}

//add ellipses (...) at the end of the string
export const ellipseEndText = (text) => {
    let ellipsesText = text
    if (text.length > 11) {
      ellipsesText = `${text.substring(0, 10)}...`
    }
    return ellipsesText
  }