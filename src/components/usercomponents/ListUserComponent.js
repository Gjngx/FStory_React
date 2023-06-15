import React, { useState, useEffect } from 'react'
import UserService from '../../services/UserService'
import { Link } from "react-router-dom"


const ListUserComponent = () => {
    const [User, setUser] = useState([])
  
    useEffect(() => {
        getAlluser();
    }, [])

    const getAlluser = () =>
    {
        UserService.getAlluser().then((response) => {
            setUser(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteUser = (id_user) =>(
        UserService.deleteuser(id_user).then((response) => {
            getAlluser();
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    )

    
    
 return (
    <div className="container">
        <br></br>
        <h2 className="text-center">Danh sách người dùng</h2>
        <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                    <th>Tài khoản</th>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Mail</th>
                    <th>SDT</th>
                    <th>Ngày tạo</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        User.map(
                            user => 
                            <tr key = {user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.hoten}</td>
                                <td>{user.ngaysinh}</td>
                                <td>{user.mail}</td>
                                <td>{user.sdt}</td>
                                <td>{user.ngaytao}</td>
                                <td>
                                    <button className="btn btn-danger"  onClick={() => deleteUser(user.id)} style={{margin: "1%"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link style={{textDecoration: "none"}} to = "/adduser" className="btn btn-primary mb-2 float-right " >Thêm user</Link>
    </div>
  )
}

export default ListUserComponent


