import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListTacGiaComponent from './components/tacgiacomponents/ListTacGiaComponent';
import HearderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddTacGiaComponent from './components/tacgiacomponents/AddTacGiaComponent';
function App() {
  
  return (
    <div>
      <Router>
        <HearderComponent/>
        <div className="container">
          <Routes>
            <Route exact path = "/" element = {<ListTacGiaComponent/>}></Route>
            <Route path = "tacgia" element = {<ListTacGiaComponent/>}></Route>
            <Route path = "/addtacgia" element = {<AddTacGiaComponent/>}></Route>
            <Route path = "/edit-tacgia/:id" element = {<AddTacGiaComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
