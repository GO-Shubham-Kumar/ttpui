import { LANGUAGE_API_URL, PPS_SEATS_API_URL } from "../api_urls"
import { wrappedFetch, wrappedGet } from "../fetchFuncs"

export const fetchConfigs = async () =>{
    const url = `${window.globalConfigs['BOI_CONFIG']}`
    return await wrappedGet(url)
}

export const fetchSeatTypes = async () =>{
    const url = `${window.globalConfigs.CORE_IP}${PPS_SEATS_API_URL}`
    return wrappedGet(url)
}

export const fetchLanguage = async () => {
    const url = `${window.globalConfigs.CORE_IP}${LANGUAGE_API_URL}`
}