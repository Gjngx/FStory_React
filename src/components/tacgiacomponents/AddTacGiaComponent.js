import React, { useState, useEffect } from 'react'
import TacGiaService from '../../services/TacGiaService';
import{useNavigate, useParams, Link} from 'react-router-dom'


function AddTacGiaComponent() {
  const[tacgia, setTacGia] = useState('')
  const[tieude, setTieuDe] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();


  const saveOrupdateTacGia = (e) => {
    e.preventDefault();
    const TacGia = {tacgia, tieude}

    if(id){
      TacGiaService.updatetacgia(id,TacGia).then((response) => {
        console.log(response.data)
        navigate('/tacgia');
      }).catch(error => {
        alert("Tên tác giả và tiêu đề đã tồn tại!");
        console.log(error);
      })
    }else{
      TacGiaService.createtacgia(TacGia).then((response) => {
        console.log(response.data)
        navigate('/tacgia');
      }).catch(error => {
        alert("Tên tác giả và tiêu đề đã tồn tại!");
        console.log(error);
      })
    }
  }



  useEffect(() => {
    TacGiaService.gettacgiaById(id).then((response) => {
      console.log(response.data)
      setTacGia(response.data.data.tacgia)
      setTieuDe(response.data.data.tieude)
      console.log(response.data.data.tacgia)
      console.log(response.data.data.tieude)
    }).catch(error =>{
      console.log(error)
    })
  },[id])

  const title = () => {
    if(id){
      return <h2 className="text-center">Cập nhật tác giả</h2>
    }else{
      return <h2 className="text-center">Thêm tác giả</h2>
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
                  <label className="form-label">Tên tác giả: </label>
                  <input
                    type = "text"
                    placeholder="Nhập tên tác giả"
                    name = "Tên tác giả"
                    className="form-control"
                    value={tacgia}
                    onChange={(e) => setTacGia(e.target.value)}
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
                <Link style={{textDecoration: "none"}} to = "tacgia" className="btn btn-danger float-right margin-2">Hủy</Link>
                <button className="btn btn-success float-right margin-2" onClick={(e) => saveOrupdateTacGia(e)}>Thực hiện</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTacGiaComponent
