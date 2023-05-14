import React, { useState } from 'react';
import AdminService from '../../services/AdminService'
import{useNavigate, Link} from 'react-router-dom';


function AddAdminComponent() {
    const[username, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const[hoten, setHoTen] = useState('')
    const[mail, setMail] = useState('')
    
    const navigate = useNavigate();


    const saveAdmin = (e) => {
    e.preventDefault();
    const Admin = {username, password, hoten, mail, }
    AdminService.createadmin(Admin).then((response) => {
        console.log(response.data)
        navigate('/admin');
      }).catch(error => {
        alert("Thêm admin lỗi!");
        console.log(error);
      })
    }

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <br></br>
            <h2 className="text-center">Thêm admin</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Username: </label>
                  <input
                    type = "text"
                    placeholder="Nhập username"
                    name = "Username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">password: </label>
                  <input
                    type="password"
                    placeholder="Nhập password:"
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
                <Link style={{textDecoration: "none"}} to = "/admin" className="btn btn-danger float-right margin-2">Hủy</Link>
                <button className="btn btn-success float-right margin-2" onClick={(e) => saveAdmin(e)}>Thực hiện</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAdminComponent
