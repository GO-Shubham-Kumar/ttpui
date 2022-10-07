import { BIN, COLORS, TOTE } from "../constants";

import { TOTE_DATA } from "../conveyorConstants";

const abc= {
    label: '',
    selected: false,
    quantity: 2,
    isDisabled: false,
    selectedColor: '',
    isEnlarged: false,
    pointer: false,
    showImage: false,
    containerText: '',
    isLoading: false,
  }

//map data according to the conveyor Bin component in the component library 
export const mapConveyorBinData = (data, cType) => {
    let i = 0;
    const cData = [];
    let labelText= '';
    let binData = {}
    let conveyorData;
    data = data.sort((a,b) => Number(a.ppsbin_id) - Number(b.ppsbin_id))
    for( i; i<6; i++){
        conveyorData = {...TOTE_DATA}
        binData = data[i]
        console.log('bindata', binData)
        labelText = `${cType}-${i+1}`
        if(binData){
            console.log('bin data ava')
            labelText = `${cType}-${binData['ppsbin_id']}`
            conveyorData['isLoading'] = binData['is_loading'] && JSON.parse(binData['is_loading']) || false;
            conveyorData['selected'] = binData['selected_state'] && JSON.parse(binData['selected_state']) || false;
            conveyorData['isDisabled'] = binData['container_de-emphasize'] && JSON.parse(binData['container_de-emphasize']) || false;
            conveyorData['isEnlarged'] = binData['container_selected'] && JSON.parse(binData['container_selected']) || false;
            conveyorData['pointer'] = binData['pointer'] && JSON.parse(binData['pointer']) || false;
            conveyorData['showImage'] = binData['totes_associated'] && JSON.parse(binData['totes_associated']) || false;
            conveyorData['quantity'] = binData['ppsbin_count'] || 0;
            conveyorData['containerText'] = binData['text_over_container'] || '';
            conveyorData['selectedColor'] = binData['ppsbin_light_color'] ? COLORS[binData['ppsbin_light_color']] : '';
            conveyorData['ppsbin_id'] = binData['ppsbin_id'] || '';
        }
        conveyorData['label'] = labelText;
        console.log('conveyorData',conveyorData)
        cData.push(conveyorData);
        labelText=''
    }
    return cData
}

export const mapConveyorToteData = (data, cType) => {
    let i = 0;
    let cData = [];
    let labelText= '';
    let binData = {}
    let conveyorData;
    const numbers = []
    data = data.sort((a,b) => Number(a.tote_id) - Number(b.tote_id))
    for( i; i<6; i++){
        conveyorData = {...TOTE_DATA}
        labelText = `${cType}-${i+1}`
        for(var j=0;j<data.length;j++){
            binData = data[j]
            console.log('i,j', i,data[j].position)
            console.log('data[j]', data[j])
            if((i+1)===Number(data[j].tote_id)){
                numbers.push(j)
                console.log('bin data ava')
                labelText = `${cType}-${binData['tote_id']}`
                conveyorData['isLoading'] = binData['is_loading'] || false;
                conveyorData['selected'] = binData['selected'] || false;
                conveyorData['isEnlarged'] = binData['selected'] || false;
                conveyorData['pointer'] = binData['pointer'] || false;
                conveyorData['showImage'] = binData['tote_id'] ? true : false;
                conveyorData['containerText'] = binData['text_over_container'] || '';
                conveyorData['selectedColor'] = binData['selected'] ? '#0390FF' : '';
                conveyorData['tote_id'] = binData['tote_id'] ? true : false;
            }
        }
        conveyorData['label'] = labelText;
        console.log('conveyorData-tote',conveyorData)
        cData.push(conveyorData);
        labelText=''
    }
    return cData
}