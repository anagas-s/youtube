import React from "react"

const VideoCard = ({info}) => {
  
    const {snippet ,statistics } = info;
    // const { channelTitle,title,thumbnails} = snippet;
    return (
        <div className="p-2 m-2 w-80 shadow-lg">
            <img className="rounded-lg" alt="video" src={snippet.thumbnails.medium.url}></img>
            <ul>
                <li className="font-bold py-2">{snippet.title}</li>
                <li>{snippet.channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
             </ul>
        </div>
    )
}

export default VideoCard;