import React, { useState, useEffect } from 'react'
import TheLoaiService from '../../services/TheLoaiService'
import { Link } from "react-router-dom"


const ListTheLoaiComponent = () => {
    const [TheLoai, setTheLoai] = useState([])
  
    useEffect(() => {
        getAlltheloai();
    }, [])

    const getAlltheloai = () =>
    {
        TheLoaiService.getAlltheloai().then((response) => {
            setTheLoai(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteTheLoai = (id_theloai) =>(
        TheLoaiService.deletetheloai(id_theloai).then((response) => {
            getAlltheloai();
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    )
    
 return (
    <div className="container">
        <br></br>
        <h2 className="text-center">Danh sách thể loại</h2>
        <br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                    <th>Thể loại</th>
                    <th>Tiêu đề</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        TheLoai.map(
                            TheLoai => 
                            <tr key = {TheLoai.id}>
                                <td>{TheLoai.id}</td>
                                <td>{TheLoai.theloai}</td>
                                <td>{TheLoai.tieude}</td>
                                <td>
                                    <Link className="btn btn-info" style={{textDecoration: "none"}} to = {`/edit-theloai/${TheLoai.id}`}>Update</Link>
                                    <button className="btn btn-danger"  onClick={() => deleteTheLoai(TheLoai.id)} style={{margin: "1%"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link style={{textDecoration: "none"}} to = "/addtheloai" className="btn btn-primary mb-2 float-right " >Thêm thể loại</Link>
    </div>
  )
}

export default ListTheLoaiComponent


