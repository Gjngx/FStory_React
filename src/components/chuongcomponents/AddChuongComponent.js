import React, { useState, useEffect } from 'react';
import ChuongService from '../../services/ChuongService';
import{useNavigate, useParams, Link} from 'react-router-dom';
import Axios from "axios";



function AddChuongComponent() {
    const[truyenid, setTruyenId] = useState('')
    const[tentruyen, setTenTruyen] = useState('')
    const[sochuong, setSoChuong] = useState('')
    const[tenchuong, setTenChuong] = useState('')
    const[noidung, setNoiDung] = useState('')
    
    const [listtruyen, setListTruyen] = useState([])
    
    const navigate = useNavigate();
    const {id} = useParams();

    const fetchTruyens = async () => {
      const { data } = await Axios.get('http://localhost:8080/api/v1/truyen');
      const truyens = data;
      setListTruyen(truyens);
      console.log(truyens);
    };


    const saveOrupdateChuong = (e) => {
    e.preventDefault();
    const Chuong = {tentruyen, sochuong, tenchuong, noidung}

    if(id){
        ChuongService.updatetruyen(id,Chuong).then((response) => {
        console.log(response.data)
        navigate(`/chuong/${truyenid}`);
      }).catch(error => {
        alert("Cập nhật chương thất bại!");
        console.log(error);
      })
    }else{
        ChuongService.createChuong(Chuong).then((response) => {
        console.log(response.data)
        navigate('truyện');
      }).catch(error => {
        alert("Thêm chương thất bại!");
        console.log(error);
      })
    }
  }
  
  useEffect(() => {
    ChuongService.getchuongById(id).then((response) => {
      console.log(response.data)
      setTruyenId(response.data.data.truyen.id)
      setTenTruyen(response.data.data.truyen.tentruyen)
      setSoChuong(response.data.data.sochuong)
      setTenChuong(response.data.data.tenchuong)
      setNoiDung(response.data.data.noidung)
    }).catch(error =>{
      console.log(error);
    })
    fetchTruyens();
  },[id])

  const title = () => {
    if(id){
      return <h2 className="text-center">Cập nhật chương {tentruyen}</h2>
    }else{
      return <h2 className="text-center">Thêm Chương</h2>
    }
  }

  const themTruyen = () => {
    if(id){
      return 
    }else{
      return  <div className="form-group mb-2">
              <label className="form-label">Truyện: </label>
              <select class="form-select" 
                      aria-label="Default select example"
                      value={tentruyen} onChange={(e) => setTenTruyen(e.target.value)}>
                      {listtruyen.map(Truyen => (
                    <option key={Truyen.id} value={Truyen.id}>{Truyen.tentruyen}</option>
                ))}
      </select>
    </div>
    }
  }

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <br></br>
            {
              title()
            }
            <div className="card-body">
              <form>
                {
                    themTruyen()
                }   
                <div className="form-group mb-2">
                  <label className="form-label">Số chương: </label>
                  <input
                    type = "text"
                    placeholder="Nhập số chương"
                    name = "Sô chương"
                    className="form-control"
                    value={sochuong}
                    onChange={(e) => setSoChuong(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Tên chương: </label>
                  <input
                    type = "text"
                    placeholder="Nhập tên chương"
                    name = "Tên chương"
                    className="form-control"
                    value={tenchuong}
                    onChange={(e) => setTenChuong(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Nội dung: </label>
                  <textarea id="exampleFormControlTextarea1" rows="5"
                    type = "text"
                    placeholder="Nhập nội dung"
                    name = "Nội dung"
                    className="form-control"
                    value={noidung}
                    onChange={(e) => setNoiDung(e.target.value)}
                  ></textarea>
                </div>
                <Link style={{textDecoration: "none"}} to = {'/truyện'} className="btn btn-danger float-right margin-2">Hủy</Link>
                <button className="btn btn-success float-right margin-2" onClick={(e) => saveOrupdateChuong(e)}>Thực hiện</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddChuongComponent
