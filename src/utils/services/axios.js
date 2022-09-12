import axios from 'axios'
import {AUTHORIZATION_HEADER} from './../constants'
const fetchClient = () => {
  let instance = axios.create({
    validateStatus: function (status) {
        return (status >= 200 && status <= 204) || status === 401 || status === 400 || status === 409;
    },
})
  instance.interceptors.request.use((config) => {
    console.log('config', config);
    const token = localStorage.getItem(AUTHTOKEN)
    console.log('localStorage.getItem(AUTHORIZATION)', token)
    if (!_.isEmpty(token)) {
      config.headers[AUTHORIZATION_HEADER] = token
    }
    return config
  })

  instance.interceptors.response.use((response) => {
    try{
      console.log('response in axios config', response.data[AUTHTOKEN])
      return response
    }catch(err){
      console.log('error in axios config', err )
    }
  })
  return instance
}

export default fetchClient()
