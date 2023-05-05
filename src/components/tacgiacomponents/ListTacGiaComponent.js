import React, { useState, useEffect } from 'react'
import TacGiaService from '../../services/TacGiaService'
import { Link } from "react-router-dom"


const ListTacGiaComponent = () => {
    const [TacGia, setTacGia] = useState([])
  
    useEffect(() => {
        getAlltacgia();
    }, [])

    const getAlltacgia = () =>
    {
        TacGiaService.getAlltacgia().then((response) => {
            setTacGia(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteTacGia = (id_tacgia) =>(
        TacGiaService.deletetacgia(id_tacgia).then((response) => {
            getAlltacgia();
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    )
    
 return (
    <div className="container">
        <br></br>
        <h2 className="text-center">Danh sách tác giả</h2>
        <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                    <th>Tên tác giả</th>
                    <th>Tiêu đề</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        TacGia.map(
                            TacGia => 
                            <tr key = {TacGia.id}>
                                <td>{TacGia.id}</td>
                                <td>{TacGia.tacgia}</td>
                                <td>{TacGia.tieude}</td>
                                <td>
                                    <Link className="btn btn-info" style={{textDecoration: "none"}} to = {`/edit-tacgia/${TacGia.id}`}>Update</Link>
                                    <button className="btn btn-danger"  onClick={() => deleteTacGia(TacGia.id)} style={{margin: "1%"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link style={{textDecoration: "none"}} to = "/addtacgia" className="btn btn-primary mb-2 float-right " >Thêm tác giả</Link>

    </div>
  )
}

export default ListTacGiaComponent


