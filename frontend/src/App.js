
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Addform from './Pages/Addform';
import Header from './components/Header';
import Viewform from './Pages/Viewform';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route  path="/" element={<Viewform/>} />
          <Route  path="/addform" element={<Addform/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
