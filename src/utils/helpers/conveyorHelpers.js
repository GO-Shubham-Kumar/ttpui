import { COLORS } from '../constants'

const TOTE_DATA = {
  label: '',
  selected: false,
  quantity: 0,
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
  let i = 0
  const cData = []
  let labelText = ''
  let binData = {}
  let conveyorData
  data = data.sort((a, b) => Number(a.ppsbin_id) - Number(b.ppsbin_id))
  for (i; i < 6; i++) {
    conveyorData = { ...TOTE_DATA }
    binData = data[i]
    labelText = `${cType}-${i + 1}`
    if (binData) {
      labelText = `${cType}-${binData['ppsbin_id']}`
      conveyorData['isLoading'] = (binData['is_loading'] && JSON.parse(binData['is_loading'])) || false
      conveyorData['selected'] = (binData['selected_state'] && JSON.parse(binData['selected_state'])) || false
      conveyorData['isDisabled'] =
        (binData['container_de-emphasize'] && JSON.parse(binData['container_de-emphasize'])) || false
      conveyorData['isEnlarged'] =
        (binData['container_selected'] && JSON.parse(binData['container_selected'])) || false
      conveyorData['pointer'] = (binData['pointer'] && JSON.parse(binData['pointer'])) || false
      conveyorData['showImage'] =
        (binData['totes_associated'] && JSON.parse(binData['totes_associated'])) || false
      conveyorData['quantity'] = binData['ppsbin_count'] || 0
      conveyorData['containerText'] = binData['text_over_container'] || ''
      conveyorData['selectedColor'] = binData['ppsbin_light_color']
        ? COLORS[binData['ppsbin_light_color']]
        : ''
      conveyorData['ppsbin_id'] = binData['ppsbin_id'] || ''
    }
    conveyorData['label'] = labelText
    cData.push(conveyorData)
    labelText = ''
  }
  return cData
}

export const mapConveyorToteData = (data, cType) => {
  const cData = []
  const numbers = []
  data = data.sort((a, b) => Number(a.tote_id) - Number(b.tote_id))
  data?.map((toteDetails, idx) => {
    const conveyorData = { ...TOTE_DATA }
    const labelText = `${cType}-${idx + 1}`
    conveyorData['isLoading'] = toteDetails['is_loading'] || false
    conveyorData['selected'] = toteDetails['selected'] || false
    conveyorData['isEnlarged'] = toteDetails['selected'] || false
    conveyorData['pointer'] = toteDetails['pointer'] || false
    conveyorData['showImage'] = toteDetails['tote_id'] ? true : false
    conveyorData['containerText'] = toteDetails['text_over_container'] || ''
    conveyorData['selectedColor'] = toteDetails['selected'] ? '#0390FF' : ''
    conveyorData['tote_id'] = toteDetails['tote_id']
    conveyorData['label'] = labelText
    cData.push(conveyorData)
  })
  return cData
}
