import axios from './axios';


export const loginUser = (username, password) => {
    return {
        res : 200,
        data : {
            status : true,
            user : {
                name : 'Sachin',
                email : 'sachin.kochar@greyorange.com'
            }
        }
    }
}
