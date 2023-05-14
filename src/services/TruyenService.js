import axios from 'axios'

const TRUYEN_BASE_REST_API_URL = 'http://localhost:8080/api/v1/truyen';

class TruyenService{

    getAlltruyen(){
        return axios.get(TRUYEN_BASE_REST_API_URL)
    }
    getAlltruyenSortDesc(){
        return axios.get(TRUYEN_BASE_REST_API_URL+'/desc?field=ngaydang')
    }
    createtruyen(truyen){
        return axios.post(TRUYEN_BASE_REST_API_URL+'/insert',truyen)
    }
    gettruyenById(id_truyen){
        return axios.get(TRUYEN_BASE_REST_API_URL+'/'+id_truyen)
    }
    updatetruyen(id_truyen,truyen){
        return axios.put(TRUYEN_BASE_REST_API_URL+'/'+id_truyen,truyen)
    }
    deletetruyen(id_truyen){
        return axios.delete(TRUYEN_BASE_REST_API_URL+'/'+id_truyen)
    }

}

// eslint-disable-next-line
export default new TruyenService()