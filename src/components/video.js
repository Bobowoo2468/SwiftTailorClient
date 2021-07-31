import React from 'react'
import './video.css'
import '../App.css'

function Video() {
    return (
        <div className = 'video-container'>
            <video src ='/videobgd.mp4' autoPlay loop muted />
        </div>
    )
}

export default Video
