import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HearderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListTacGiaComponent from './components/tacgiacomponents/ListTacGiaComponent';
import AddTacGiaComponent from './components/tacgiacomponents/AddTacGiaComponent';
import ListTheLoaiComponent from './components/theloaicomponents/ListTheLoaiComponent';
import AddTheLoaiComponent from './components/theloaicomponents/AddTheLoaiComponent';
import ListTruyenComponent from './components/truyencomponents/ListTruyenComponent';
import AddTruyenComponent from './components/truyencomponents/AddTruyenComponent';
import ListUserComponent from './components/usercomponents/ListUserComponent';
import AddUserComponent from './components/usercomponents/AddUserComponent';
import ListAdminComponent from './components/admincomponents/ListAdminComponent';
import AddAdminComponent from './components/admincomponents/AddAdminComponent';
import ListChuongComponent from './components/chuongcomponents/ListChuongComponent';
import AddChuongComponent from './components/chuongcomponents/AddChuongComponent';


function App() {

  return (
    <div>
      <Router>
        <HearderComponent/>
        <div className="container">
          <Routes>
            <Route exact path = "/" element = {<ListTacGiaComponent/>}></Route>
            <Route path = "/tác giả" element = {<ListTacGiaComponent/>}></Route>
            <Route path = "/addtacgia" element = {<AddTacGiaComponent/>}></Route>
            <Route path = "/edit-tacgia/:id" element = {<AddTacGiaComponent/>}></Route>
            <Route path = "/thể loại" element = {<ListTheLoaiComponent/>}></Route>
            <Route path = "/addtheloai" element = {<AddTheLoaiComponent/>}></Route>
            <Route path = "/edit-theloai/:id" element = {<AddTheLoaiComponent/>}></Route>
            <Route path = "/truyện" element = {<ListTruyenComponent/>}></Route>
            <Route path = "/addtruyen" element = {<AddTruyenComponent/>}></Route>
            <Route path = "/edit-truyen/:id" element = {<AddTruyenComponent/>}></Route>
            <Route path = "/user" element = {<ListUserComponent/>}></Route>
            <Route path = "/adduser" element = {<AddUserComponent/>}></Route>
            <Route path = "/admin" element = {<ListAdminComponent/>}></Route>
            <Route path = "/addadmin" element = {<AddAdminComponent/>}></Route>
            <Route path = "/chuong/:id" element = {<ListChuongComponent/>}></Route>
            <Route path = "/addchuong" element = {<AddChuongComponent/>}></Route>
            <Route path = "/edit-chuong/:id" element = {<AddChuongComponent/>}></Route>
          </Routes>
          
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}


export default App;
