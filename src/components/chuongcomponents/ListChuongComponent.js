import React, { useState, useEffect } from 'react'
import ChuongService from '../../services/ChuongService'
import { useParams, Link } from "react-router-dom"


const ListChuongComponent = () => {
    const [Chuong, setChuong] = useState([])
    const {id} = useParams();
  
    useEffect(() => {
        getAllChuongByTruyen(id);
    }, [id])

    const getAllChuongByTruyen = (id) =>
    {
        ChuongService.getAllChuongByTruyen(id).then((response) => {
            setChuong(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteChuong = (id_chuong) =>(
        ChuongService.deletechuong(id_chuong).then((response) => {
            getAllChuongByTruyen(id);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    )
    
 return (
    <div className="container">
        <br></br>
        <h2 className="text-center">Danh sách chương</h2>
        <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                    <th>Tên truyện</th>
                    <th>Số chương</th>
                    <th>Tên chương</th>
                    <th>Nội dung</th>
                    <th>Ngày đăng</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        Chuong.map(
                            chuong => 
                            <tr key = {chuong.id}>
                                <td>{chuong.id}</td>
                                <td>{chuong.truyen.tentruyen}</td>
                                <td>{chuong.sochuong}</td>
                                <td>{chuong.tenchuong}</td>
                                <td>{chuong.noidung}</td>
                                <td>{chuong.ngaydang}</td>
                                <td>
                                    <Link className="btn btn-info" style={{textDecoration: "none"}} to = {`/edit-chuong/${chuong.id}`}>Update</Link>
                                    <button className="btn btn-danger"  onClick={() => deleteChuong(chuong.id)} style={{margin: "1%"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link style={{textDecoration: "none"}} to = "/addchuong" className="btn btn-primary mb-2 float-right " >Thêm chương</Link>
    </div>
  )
}

export default ListChuongComponent


