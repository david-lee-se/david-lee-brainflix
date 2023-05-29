import Header from './components/Header/Header';
import './App.scss';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import avatar from './assets/images/Mohan-muruge.jpg';
import Home from './pages/Home/Home';
import VideoUpload from './pages/VideoUpload/VideoUpload';

function App() {

		
	return (
		<div className="App">
			<BrowserRouter>
				<Header avatar={avatar}/>
				<Routes>
					<Route path="/" element={<Home avatar={avatar}/>}/>
					<Route path= "/VideoUpload" element={<VideoUpload/>}/>
					<Route path="/videos/:videoId" element={<Home avatar={avatar}/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
