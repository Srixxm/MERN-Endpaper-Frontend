import NewsComponent from './components/newsComponent/NewsComponent';
import PostComponent from './components/postComponent/PostComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// import sports from './assests/31551.png'
// import eco from './assests/economic/download.jfif'
// import cine from './assests/cine/images.jfif'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    
    <Router>
    <div className="App">
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to={'/news'}>
           <div className='text'> LIBERT TIMES</div>
          </Link>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className="navbar-nav m3-auto" >
              <li className='nav-item'>
                <Link className='link' to={'/news'}>View news</Link>
              </li>
              <li className='nav-item'>
                <Link className='link' to={'/post'}>post news</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='index'>
        <div className='inner'>
          <Routes>
            <Route exact path='/' element={<NewsComponent/>} />
            <Route exact path='/news' element={<NewsComponent/>} />
            <Route exact path='/post' element={<PostComponent/>} />
          </Routes>
        </div>
        </div>
      
    </div>
    </Router>
    

  );
}

export default App;
