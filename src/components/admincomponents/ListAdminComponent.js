import React, { useState, useEffect } from 'react'
import AdminService from '../../services/AdminService'
import { Link } from "react-router-dom"


const ListAdminComponent = () => {
    const [Admin, setAdmin] = useState([])
  
    useEffect(() => {
        getAlladmin();
    }, [])

    const getAlladmin = () =>
    {
        AdminService.getAlladmin().then((response) => {
            setAdmin(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteAdmin = (id_admin) =>(
        AdminService.deleteadmin(id_admin).then((response) => {
            getAlladmin();
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    )

    
    
 return (
    <div className="container">
        <br></br>
        <h2 className="text-center">Danh sách admin</h2>
        <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Họ tên</th>
                    <th>Mail</th>
                    <th>Ngày tạo</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        Admin.map(
                            admin => 
                            <tr key = {admin.id}>
                                <td>{admin.id}</td>
                                <td>{admin.username}</td>
                                <td>{admin.hoten}</td>
                                <td>{admin.mail}</td>
                                <td>{admin.ngaytao}</td>
                                <td>
                                    <button className="btn btn-danger"  onClick={() => deleteAdmin(admin.id)} style={{margin: "1%"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link style={{textDecoration: "none"}} to = "/addadmin" className="btn btn-primary mb-2 float-right " >Thêm admin</Link>
    </div>
  )
}

export default ListAdminComponent


