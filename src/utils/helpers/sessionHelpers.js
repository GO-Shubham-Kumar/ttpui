//save data to session storage
export const saveSessionData = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}
//retreive data from sessoion storage
export const retreiveSessionData = (key) => {
    const value = localStorage.getItem(key);
    console.log('-- sessiond data --', key, value)
    return (value !== null && value !== "undefined") ? JSON.parse(value) : null
}
//remove data from session storage
export const removeSessionData = (key) => {
    return localStorage.removeItem(key)
}
