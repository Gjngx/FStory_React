import React, { useState, useEffect } from 'react';
import UserService from '../../services/UserService'
import{useNavigate, useParams, Link} from 'react-router-dom';


function AddUserComponent() {
    const[username, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const[hoten, setHoTen] = useState('')
    const[ngaysinh, setNgaySinh] = useState('')
    const[mail, setMail] = useState('')
    const[sdt, setSDT] = useState('')
    
    const navigate = useNavigate();
    const {id} = useParams();


    const saveUser = (e) => {
    e.preventDefault();
    const User = {username, password, hoten, ngaysinh, mail, sdt}
      UserService.createuser(User).then((response) => {
        console.log(response.data)
        navigate('/user');
      }).catch(error => {
        alert("Thêm tài khoản người dùng lỗi!");
        console.log(error);
      })
    }


  

  useEffect(() => {
    UserService.getuserById(id).then((response) => {
      console.log(response.data)
      setUserName(response.data.username)
      setPassword(response.data.password)
      setHoTen(response.data.hoten)
      setNgaySinh(response.data.ngaysinh)
      setMail(response.data.mail)
      setSDT(response.data.sdt)
    }).catch(error =>{
      console.log(error);
    })
  },[id])


  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <br></br>
            <h2 className="text-center">Thêm người dùng</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Tài khoản: </label>
                  <input
                    type = "text"
                    placeholder="Nhập tài khoản"
                    name = "Username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Mật khẩu: </label>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu:"
                    name = "Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Họ tên: </label>
                  <input
                    type = "text"
                    placeholder="Nhập họ tên"
                    name = "Họ tên"
                    className="form-control"
                    value={hoten}
                    onChange={(e) => setHoTen(e.target.value)}
                  ></input>
                </div>

                

                <div className="form-group mb-2">
                  <label className="form-label">Ngày sinh: </label>
                  <input
                    type = "date" 
                    required pattern="\d{2}-\d{2}-\d{4}"
                    placeholder="Nhập ngày sinh"
                    name = "Ngày sinh"
                    className="form-control"
                    value={ngaysinh}
                    onChange={(e) => setNgaySinh(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Mail: </label>
                  <input
                    type = "text"
                    placeholder="Nhập Mail"
                    name = "Mail"
                    className="form-control"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Số điện thoại: </label>
                  <input
                    type = "text"
                    placeholder="Nhập số điện thoại"
                    name = "Sdt"
                    className="form-control"
                    value={sdt}
                    onChange={(e) => setSDT(e.target.value)}
                  ></input>
                </div>
                <Link style={{textDecoration: "none"}} to = "/user" className="btn btn-danger float-right margin-2">Hủy</Link>
                <button className="btn btn-success float-right margin-2" onClick={(e) => saveUser(e)}>Thực hiện</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUserComponent
