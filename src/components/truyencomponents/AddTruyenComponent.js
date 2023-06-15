import React, { useState, useEffect } from 'react';
import TruyenService from '../../services/TruyenService';
import{useNavigate, useParams, Link} from 'react-router-dom';
import Axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

function AddTruyenComponent() {
    const[tentruyen, setTenTruyen] = useState('')
    const[anhtruyen, setAnhTruyen] = useState('')
    const[tieude, setTieuDe] = useState('')
    const[tacgia, setTacGia] = useState('')
    const[theloai, setTheLoai] = useState('')
    const[trangthai, setTrangThai] = useState('')
    const[gioithieu, setGioiThieu] = useState('')

    const [listtacgia, setListTacGia] = useState([])
    const [listtheloai, setListTheLoai] = useState([])
    const [listtrangthai, setListTrangThai] = useState([])

    const fetchTacGias = async () => {
      const { data } = await Axios.get('http://localhost:8080/api/v1/tacgia');
      const tacgias = data;
      setListTacGia(tacgias);
      console.log(tacgias);
    };
  
    const fetchTheLoais = async () => {
      const { data } = await Axios.get('http://localhost:8080/api/v1/theloai');
      const theloais = data;
      setListTheLoai(theloais);
      console.log(theloais);
    };

    const fetchTrangThais = async () => {
      const { data } = await Axios.get('http://localhost:8080/api/v1/trangthai');
      const trangthais = data;
      setListTrangThai(trangthais);
      console.log(trangthais);
    };
    
    const navigate = useNavigate();
    const {id} = useParams();


    const saveOrupdateTruyen = (e) => {
    e.preventDefault();
    const Truyen = {tentruyen, anhtruyen, tieude, theloai, tacgia, trangthai, gioithieu}

    if(id){
        TruyenService.updatetruyen(id,Truyen).then((response) => {
        console.log(response.data)
        navigate('/truyện');
      }).catch(error => {
        alert("Tên truyện đã tồn tại!");
        console.log(error);
      })
    }else{
        TruyenService.createTruyen(Truyen).then((response) => {
        console.log(response.data)
        navigate('/truyện');
      }).catch(error => {
        alert("Tên truyện đã tồn tại!");
        console.log(error);
      })
    }
  }

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://localhost:8080/api/v1/FileUpload?file', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setAnhTruyen(data.data);
        setUploadSuccess(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    TruyenService.gettruyenById(id).then((response) => {
      console.log(response.data)
      setTenTruyen(response.data.data.tentruyen)
      setAnhTruyen(response.data.data.anhtruyen)
      setTieuDe(response.data.data.tieude)
      setTacGia(response.data.data.tacgia.id)
      setTheLoai(response.data.data.theloai.id)
      setTrangThai(response.data.data.trangthai.id)
      setGioiThieu(response.data.data.gioithieu)
    }).catch(error =>{
      console.log(error);
    })
    fetchTacGias();
    fetchTheLoais();
    fetchTrangThais();
  },[id])

  const title = () => {
    if(id){
      return <h2 className="text-center">Cập nhật truyện</h2>
    }else{
      return <h2 className="text-center">Thêm truyện</h2>
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


            <div>
              <input type="file" onChange={handleFileChange} />
              <button className="btn btn-success float-right" onClick={handleUpload}>Tải lên</button>
              {uploadSuccess && (
                <p>
                  Tải lên thành công! Tên tệp: {anhtruyen}
                </p>
              )}
            </div>


              <form method='POST'>
                <div className="form-group mb-2">
                  <label className="form-label">Tên truyện: </label>
                  <input
                    type = "text"
                    placeholder="Nhập tên truyện"
                    name = "Tên truyện"
                    className="form-control"
                    value={tentruyen}
                    onChange={(e) => setTenTruyen(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Ảnh truyện (215X325): </label>
                  <input
                    type="text"
                    name="Ảnh truyện"
                    placeholder="Nhập ảnh truyện"
                    className="form-control"
                    value={anhtruyen}
                    readOnly
                    onChange={(e) => setAnhTruyen(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Tiêu đề: </label>
                  <input
                    type = "text"
                    placeholder="Nhập tiêu đề"
                    name = "Tiêu đề"
                    className="form-control"
                    value={tieude}
                    onChange={(e) => setTieuDe(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Tác giả: </label>
                  <select class="form-select" 
                          aria-label="Default select example"
                          value={tacgia} 
                          onChange={(e) => setTacGia(e.target.options[e.target.selectedIndex].value)}>
                            {listtacgia.map(tacGia => (
                              <option key={tacGia.id} value={tacGia.id}>{tacGia.tacgia}</option>
                            ))}
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Thể loại: </label>
                  <select class="form-select" 
                          aria-label="Default select example"
                          value={theloai} 
                          onChange={(e) => setTheLoai(e.target.options[e.target.selectedIndex].value)}>
                            {listtheloai.map(theLoai => (
                              <option key={theLoai.id} value={theLoai.id}>{theLoai.theloai}</option>
                            ))}
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Trạng thái: </label>
                  <select class="form-select" 
                          aria-label="Default select example"
                          value={trangthai} 
                          onChange={(e) => setTrangThai(e.target.options[e.target.selectedIndex].value)}>
                            {listtrangthai.map(trangThai => (
                              <option key={trangThai.id} value={trangThai.id}>{trangThai.trangthai}</option>
                            ))}
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Giới thiệu: </label>
                  <textarea
                    id="exampleFormControlTextarea1" rows="5"
                    type = "text"
                    placeholder="Nhập giới thiệu"
                    name = "Giới thiệu"
                    className="form-control"
                    value={gioithieu}
                    onChange={(e) => setGioiThieu(e.target.value)}
                  ></textarea>
                </div>
                <Link style={{textDecoration: "none"}} to = "/truyện" className="btn btn-danger float-right margin-2">Hủy</Link>
                <button className="btn btn-success float-right margin-2" onClick={(e) => saveOrupdateTruyen(e)}>Thực hiện</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTruyenComponent
