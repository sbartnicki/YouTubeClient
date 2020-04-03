import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />
      })}
    </div>
  )
}

export default VideoList
