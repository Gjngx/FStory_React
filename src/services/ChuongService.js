import axios from 'axios'

const CHUONG_BASE_REST_API_URL = 'http://localhost:8081/api/v1/chuongtruyen';

class ChuongService{

    getAllChuong(){
        return axios.get(CHUONG_BASE_REST_API_URL)
    }

    getAllChuongByTruyen(id_truyen){
        return axios.get(CHUONG_BASE_REST_API_URL+'/truyen?truyen='+id_truyen)
    }
    createchuong(chuong){
        return axios.post(CHUONG_BASE_REST_API_URL+'/insert',chuong)
    }
    getchuongById(id_chuong){
        return axios.get(CHUONG_BASE_REST_API_URL+'/'+id_chuong)
    }
    updatechuong(id_chuong,chuong){
        return axios.put(CHUONG_BASE_REST_API_URL+'/'+id_chuong,chuong)
    }
    deletechuong(id_chuong){
        return axios.delete(CHUONG_BASE_REST_API_URL+'/'+id_chuong)
    }

}

// eslint-disable-next-line
export default new ChuongService()