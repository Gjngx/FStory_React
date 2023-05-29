import axios from 'axios'

const USER_BASE_REST_API_URL = 'http://localhost:8081/api/v1/user';

class UserService{

    getAlluser(){
        return axios.get(USER_BASE_REST_API_URL)
    }
    createuser(user){
        return axios.post(USER_BASE_REST_API_URL+'/insert',user)
    }
    getuserById(id_user){
        return axios.get(USER_BASE_REST_API_URL+'/'+id_user)
    }
    updateuser(id_user,user){
        return axios.put(USER_BASE_REST_API_URL+'/'+id_user,user)
    }
    deleteuser(id_user){
        return axios.delete(USER_BASE_REST_API_URL+'/'+id_user)
    }

}

// eslint-disable-next-line
export default new UserService()