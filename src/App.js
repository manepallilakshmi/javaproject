import api from './api/axiosconfig';
import Home from './home';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import About from './About';
import Login from './login';
import Admin from './admin';
import Login1 from './login1';
import Login2 from './guest';
import Student from './Sudent';
import Teacher from './Teacher';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path='/login/login1' element={<Login1/>}/>
    <Route path='/login/guest' element={<Login2/>}/>
    <Route path='/login/guest/login11' element={<Student/>}/>
    <Route path='/login/guest/guest2' element={<Teacher/>}/>
    <Route path="/admin" element={<Admin />} />
    
    </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
