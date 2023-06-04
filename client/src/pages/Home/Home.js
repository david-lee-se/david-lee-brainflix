import './Home.scss';
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/CommentForm/CommentForm';
import VideoList from '../../components/VideoList/VideoList';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import ActiveVideoDetails from '../../components/ActiveVideoDetails/ActiveVideoDetails';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Home(props) {

	const {videoId} = useParams();
	const [videoList, setVideoList] = useState([]);
	const [activeVideo, setActiveVideo] = useState({});
	let comments = activeVideo.comments;

	useEffect(() => {
		const getVideos = async () => {
		try {
			const videoListData = await axios.get(`http://localhost:8080/videos`)
			setVideoList(videoListData.data);
		}
		catch (err) {
			console.log(err);
		}}
		getVideos();
	}, []);


	useEffect(() => {
		const getVideoDetails = async () => {
		try {
			const videoDetails = await axios.get(
			!videoId
			?`http://localhost:8080/videos/${videoList[0].id}`
			:`http://localhost:8080/videos/${videoId}`)
			setActiveVideo(videoDetails.data);
		}
		catch (err) {
			console.log(err);
		}}
		getVideoDetails();
	}, [videoId, videoList]);


	return(
		<>
			<VideoPlayer activeVideo={activeVideo}/>
			<div className='list-details-container'>
				<div className='details-container'>
					<ActiveVideoDetails activeVideo={activeVideo}/>
					<CommentForm avatar={props.avatar}/>
					<Comments comments={comments}/>
				</div>
				<div className='list-container'>
				<VideoList 
					videoList ={videoList}
					activeVideo= {activeVideo}
				/>
				</div>
			</div>
		</>
	)
}

export default Home;
