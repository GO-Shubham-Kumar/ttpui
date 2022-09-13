import axios from './services/axios';
// const source = CancelToken.source();
let cancel;

export async function wrappedFetch(input, method, body, headers) {
  console.log('input, method, body', input, method, body);
  let config = {
    method: method,
    url: input,
    data:body,
  }  
  if(headers) config.headers= headers
  return await axios(config);
}

export async function wrappedGet(resource, method) {
    if(resource.includes('searchkey')) cancel && cancel();
    return await axios({
      method: method,
      url: resource,
      // cancelToken :   new CancelToken(function executor(c) {
      //   // An executor function receives a cancel function as a parameter
      //   cancel = c;
      // })
    })
  }
  