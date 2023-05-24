import Header from './components/Header/Header';
import './App.scss';


import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';


import avatar from './assets/images/Mohan-muruge.jpg';

import Home from './pages/Home';
{/* <NavLink to={`/${video.id}`}></NavLink>  */}
function App() {

      
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header avatar={avatar}/>
      <Routes>
        <Route  
          path="/" 
          element={<Home 
            avatar={avatar}
          />}
        />
        <Route path= "" element=""/>
        <Route path= "/video/:videoId" element=""/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
