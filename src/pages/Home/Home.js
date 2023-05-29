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
	const api = "?api_key=127817fc-3709-4b2e-8d5d-e072e754f887";
	let comments = activeVideo.comments;

	useEffect(() => {
		const getVideos = async () => {
		try {
			const videoListData = await axios.get(`https://project-2-api.herokuapp.com/videos${api}`)
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
			?`https://project-2-api.herokuapp.com/videos/${videoList[0].id}${api}`
			:`https://project-2-api.herokuapp.com/videos/${videoId}${api}`)
			setActiveVideo(videoDetails.data);
		}
		catch (err) {
			console.log(err);
		}}
		getVideoDetails();
	}, [videoId, videoList]);


	return(
		<>
		<VideoPlayer 
			activeVideo={activeVideo}
		/>
		<div className='list-details-container'>
			<div className='details-container'>
			<ActiveVideoDetails 
				activeVideo={activeVideo}
			/>
			<CommentForm 
				avatar={props.avatar}
			/>
			<Comments 
				comments={comments}
			/>
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
