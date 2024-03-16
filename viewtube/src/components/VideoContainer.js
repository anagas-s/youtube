import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants"

const VideoContainer = () => {

    useEffect(()=>{
        getVideos()
    },[])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API)
        console.log(data)
        const json = await data.json();
        console.log(json)
    }

    return (
        <div>Video Container</div>
    )
}

export default VideoContainer;