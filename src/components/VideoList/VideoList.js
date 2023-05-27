import { useState, useEffect } from 'react';
import './VideoList.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

function VideoList(props) {

const api = "?api_key=127817fc-3709-4b2e-8d5d-e072e754f887";


 
    

    return (
        <div className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            <ul >
                {props.videoList.map((video) => {
                    if(props.activeVideo.id === video.id) {
                        return "";
                    }else 
                    {
                    return (
                        <Link key={video.id} to={`/videos/${video.id}`} className='video-list__item'>
                            <div id={video.id} className='video-list__image-container'>
                            <img id={video.id}className="video-list__image" src={video.image} alt="video thumbnail"/>
                            </div>
                            <div id={video.id} className='video-list__details-container'>
                                <h2 id={video.id} className='video-list__item-title'>{video.title}</h2>
                                <p id={video.id} className='video-list__item-channel'>{video.channel}</p>
                            </div>
                        </Link>
                    )}
                })}
            </ul>
        </div>
    )
}

export default VideoList;