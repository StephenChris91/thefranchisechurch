// useYoutubeLive.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useYoutubeLive = (channelId, apiKey) => {
  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "id,snippet",
        eventType: "live",
        channelId: channelId,
        type: "video",
        key: apiKey,
        maxResults: "1",
        order: "date",
      },
    })
      .then((res) => {
        if (res.data.items && res.data.items.length > 0) {
          const liveInfo = {
            videoId: res.data.items[0].id.videoId,
            title: res.data.items[0].snippet.title,
            description: res.data.items[0].snippet.description,
            thumbnail: res.data.items[0].snippet.thumbnails.default.url,
          };
          setLiveData(liveInfo);
        }
      })
      .catch((error) => {
        console.error("Error fetching YouTube live data:", error);
      });
  }, [channelId, apiKey]);

  return liveData;
};

export default useYoutubeLive;
