import axios from 'axios'
import { retreiveSessionData } from '../helpers/sessionHelpers';
import {AUTHORIZATION_HEADER, AUTH_TOKEN, AUTH_TOKEN_REQUEST} from './../constants';

const fetchClient = () => {
  let instance = axios.create({
    validateStatus: function (status) {
        return (status >= 200 && status <= 204) || status === 409;
    },
})
  instance.interceptors.request.use((config) => {
    // console.log('config', config);
    const token = retreiveSessionData(AUTH_TOKEN)
    // console.log('retreiveSessionData(AUTHORIZATION)', token)
    if (token) {
      config.headers[AUTHORIZATION_HEADER] = token
      config.headers[AUTH_TOKEN_REQUEST] = token
    }
    return config
  })

  instance.interceptors.response.use((response) => {
    try{
      // console.log('response in axios config', response.data[AUTH_TOKEN])
      return response
    }catch(err){
      console.log('error in axios config', err )
    }
  })
  return instance
}

export default fetchClient()
