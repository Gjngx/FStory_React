import axios from 'axios'

const TRUYEN_BASE_REST_API_URL = 'http://localhost:8080/api/v1/truyen';

class TruyenService{

    getAlltruyen(){
        return axios.get(TRUYEN_BASE_REST_API_URL)
    }
    createtheloai(truyen){
        return axios.post(TRUYEN_BASE_REST_API_URL,truyen)
    }
    gettheloaiById(id_truyen){
        return axios.get(TRUYEN_BASE_REST_API_URL+'/'+id_truyen)
    }
    updatetheloai(id_truyen,truyen){
        return axios.put(TRUYEN_BASE_REST_API_URL+'/'+id_truyen,truyen)
    }
    deletetheloai(id_truyen){
        return axios.delete(TRUYEN_BASE_REST_API_URL+'/'+id_truyen)
    }

}

// eslint-disable-next-line
export default new TruyenService()