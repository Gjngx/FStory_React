import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HearderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import ListTacGiaComponent from './components/tacgiacomponents/ListTacGiaComponent';
import AddTacGiaComponent from './components/tacgiacomponents/AddTacGiaComponent';

import ListTheLoaiComponent from './components/theloaicomponents/ListTheLoaiComponent';
import AddTheLoaiComponent from './components/theloaicomponents/AddTheLoaiComponent';



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
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}


export default App;
