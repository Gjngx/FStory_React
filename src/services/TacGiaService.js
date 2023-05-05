import axios from 'axios'

const TACGIA_BASE_REST_API_URL = 'http://localhost:8080/api/v1/tacgia';

class TacGiaService{

    getAlltacgia(){
        return axios.get(TACGIA_BASE_REST_API_URL)
    }
    createtacgia(tacgia){
        return axios.post(TACGIA_BASE_REST_API_URL,tacgia)
    }
    gettacgiaById(id_tacgia){
        return axios.get(TACGIA_BASE_REST_API_URL+'/'+id_tacgia)
    }
    updatetacgia(id_tacgia,tacgia){
        return axios.put(TACGIA_BASE_REST_API_URL+'/'+id_tacgia,tacgia)
    }
    deletetacgia(id_tacgia){
        return axios.delete(TACGIA_BASE_REST_API_URL+'/'+id_tacgia)
    }

}
// eslint-disable-next-line
export default new TacGiaService()