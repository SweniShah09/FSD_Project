
import './App.css';
import Topbar from './component/Topbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Single from './pages/Single';
import Write from './pages/Write';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <div>
       <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}></Route> 
          <Route path="/register" element={ <Register />} ></Route>
          <Route path="/login" element={ <Login />} ></Route>
          <Route path="/write" element={ <Write />} ></Route>
          <Route path="/settings" element={user ? <Settings /> : <Register/>} ></Route>
          <Route path="/post/:postId" element={<Single />} ></Route> 
        </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
