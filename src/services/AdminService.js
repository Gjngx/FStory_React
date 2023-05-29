import axios from 'axios'

const ADMIN_BASE_REST_API_URL = 'http://localhost:8081/api/v1/admin';

class AdminService{

    getAlladmin(){
        return axios.get(ADMIN_BASE_REST_API_URL)
    }
    createadmin(admin){
        return axios.post(ADMIN_BASE_REST_API_URL+'/insert',admin)
    }
    getadminById(id_admin){
        return axios.get(ADMIN_BASE_REST_API_URL+'/'+id_admin)
    }
    updatedate(id_admin,admin){
        return axios.put(ADMIN_BASE_REST_API_URL+'/'+id_admin,admin)
    }
    deleteadmin(id_admin){
        return axios.delete(ADMIN_BASE_REST_API_URL+'/'+id_admin)
    }

}

// eslint-disable-next-line
export default new AdminService()