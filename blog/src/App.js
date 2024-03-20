import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './components/createPost';
import ViewAllPost from './components/viewAllPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPost from './components/viewPost';
import Home from './components/Home';
function App() {
  return (
    <div>
      
      

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route> 
          <Route path='/createPost' element={<CreatePost/>}></Route>
          <Route path='/viewallPost' element={<ViewAllPost/>}></Route>
          <Route path='/viewPost/:id' element={<ViewPost/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
