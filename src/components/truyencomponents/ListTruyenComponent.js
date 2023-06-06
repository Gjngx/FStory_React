import React, { useState, useEffect } from 'react'
import TruyenService from '../../services/TruyenService'
import { Link } from "react-router-dom"


const ListTruyenComponent = () => {
    const [Truyen, setTruyen] = useState([])
  
    useEffect(() => {
        getAlltruyenSortDesc();
    }, [])

    const getAlltruyenSortDesc = () =>
    {
        TruyenService.getAlltruyenSortDesc().then((response) => {
            setTruyen(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteTruyen = (id_truyen) =>(
        TruyenService.deletetruyen(id_truyen).then((response) => {
            getAlltruyenSortDesc();
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    )
    
 return (
    <div className="container">
        <br></br>
        <h2 className="text-center">Danh sách truyện</h2>
        <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                    <th>Ảnh truyện</th>
                    <th>Tên truyện</th>
                    <th>Tiêu đề</th>
                    <th>Trạng thái</th>
                    <th>Tác giả</th>
                    <th>Thể loại</th>
                    <th>Giới thiệu</th>
                    <th>Ngày đăng</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        Truyen.map(
                            truyen => 
                            <tr key = {truyen.id}>
                                <td>{truyen.id}</td>
                                <td><img style={{width: "129px", height: "192px"}} src={`http://localhost:8080/api/v1/FileUpload/files/${truyen.anhtruyen}`} alt= {truyen.tentruyen} /></td>
                                <td>{truyen.tentruyen}</td>
                                <td>{truyen.tieude}</td>
                                <td>{truyen.trangthai.trangthai}</td>
                                <td>{truyen.tacgia.tacgia}</td>
                                <td>{truyen.theloai.theloai}</td>
                                <td>{truyen.gioithieu}</td>
                                <td>{truyen.ngaydang}</td>
                                <td>
                                    <Link className="btn btn-info" style={{textDecoration: "none"}} to = {`/edit-truyen/${truyen.id}`}>Update</Link>
                                    <button className="btn btn-danger"  onClick={() => deleteTruyen(truyen.id)} style={{margin: "1%"}}>Delete</button>
                                    <Link className="btn btn-success" style={{textDecoration: "none"}} to = {`/chuong/${truyen.id}`}>DS chương</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link style={{textDecoration: "none"}} to = "/addtruyen" className="btn btn-primary mb-2 float-right " >Thêm truyện</Link>
    </div>
  )
}

export default ListTruyenComponent


