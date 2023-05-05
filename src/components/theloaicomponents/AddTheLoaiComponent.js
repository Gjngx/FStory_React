import React, { useState, useEffect } from 'react'
import TheLoaiService from '../../services/TheLoaiService';
import{useNavigate, useParams, Link} from 'react-router-dom'


function AddTheLoaiComponent() {
  const[theloai, setTheLoai] = useState('')
  const[tieude, setTieuDe] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();


  const saveOrupdateTheLoai = (e) => {
    e.preventDefault();
    const TheLoai = {theloai, tieude}

    if(id){
        TheLoaiService.updatetheloai(id,TheLoai).then((response) => {
        console.log(response.data)
        navigate('/thể loại');
      }).catch(error => {
        alert("Tên thể loại hoặc tiêu đề đã tồn tại!");
        console.log(error);
      })
    }else{
        TheLoaiService.createtheloai(TheLoai).then((response) => {
        console.log(response.data)
        navigate('/thể loại');
      }).catch(error => {
        alert("Tên thể loại hoặc tiêu đề đã tồn tại!");
        console.log(error);
      })
    }
  }

  useEffect(() => {
    TheLoaiService.gettheloaiById(id).then((response) => {
      console.log(response.data)
      setTheLoai(response.data.data.theloai)
      setTieuDe(response.data.data.tieude)
    }).catch(error =>{
      console.log(error);
    })
  },[id])

  const title = () => {
    if(id){
      return <h2 className="text-center">Cập nhật thể loại</h2>
    }else{
      return <h2 className="text-center">Thêm thể loại</h2>
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
                <div className="form-group mb-2">
                  <label className="form-label">Tên thể loại: </label>
                  <input
                    type = "text"
                    placeholder="Nhập tên thể loại"
                    name = "Tên tác giả"
                    className="form-control"
                    value={theloai}
                    onChange={(e) => setTheLoai(e.target.value)}
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
                <Link style={{textDecoration: "none"}} to = "/thể loại" className="btn btn-danger float-right margin-2">Hủy</Link>
                <button className="btn btn-success float-right margin-2" onClick={(e) => saveOrupdateTheLoai(e)}>Thực hiện</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTheLoaiComponent
