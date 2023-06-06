import axios from 'axios'

const THELOAI_BASE_REST_API_URL = 'http://localhost:8080/api/v1/theloai';

class TheLoaiService{

    getAlltheloai(){
        return axios.get(THELOAI_BASE_REST_API_URL)
    }
    createtheloai(theloai){
        return axios.post(THELOAI_BASE_REST_API_URL+'/insert',theloai)
    }
    gettheloaiById(id_theloai){
        return axios.get(THELOAI_BASE_REST_API_URL+'/'+id_theloai)
    }
    updatetheloai(id_theloai,theloai){
        return axios.put(THELOAI_BASE_REST_API_URL+'/'+id_theloai,theloai)
    }
    deletetheloai(id_theloai){
        return axios.delete(THELOAI_BASE_REST_API_URL+'/'+id_theloai)
    }

}

// eslint-disable-next-line
export default new TheLoaiService()