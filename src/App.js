import Header from './components/Header/Header';
import './App.scss';
import ActiveVideo from './components/ActiveVideo/ActiveVideo';
import videos from './assets/data/videos.json';
import videoDetails from './assets/data/video-details.json';


function App() {
  return (
    <div className="App">
      <Header/>
      <ActiveVideo/>
    </div>
  );
}

export default App;
