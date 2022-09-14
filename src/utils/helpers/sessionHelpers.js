//save data to session storage
export const saveSessionData = (key, data) => {
    return sessionStorage.setItem(key, JSON.stringify(data))
}
//retreive data from sessoion storage
export const retreiveSessionData = (key) => {
    return JSON.parse(sessionStorage.getItem(key))
}
//remove data from session storage
export const removeSessionData = (key) => {
    return sessionStorage.removeItem(key)
}
