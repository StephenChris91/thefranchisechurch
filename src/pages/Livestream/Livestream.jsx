import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const Livestream = () => {
  const [isLive, setIsLive] = useState(false);

  // YouTube video ID for your livestream
  const videoId = 'YOUR_YOUTUBE_VIDEO_ID';

  useEffect(() => {
    // Function to check livestream status
    const checkLivestreamStatus = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=YOUR_YOUTUBE_API_KEY&part=liveStreamingDetails`
        );
        const data = await response.json();

        // Check if the livestream is active
        const isLiveNow =
          data.items &&
          data.items[0] &&
          data.items[0].liveStreamingDetails &&
          data.items[0].liveStreamingDetails.concurrencyType === 'live';

        setIsLive(isLiveNow);
      } catch (error) {
        console.error('Error checking livestream status:', error);
      }
    };

    // Check livestream status on component mount
    checkLivestreamStatus();

    // Check livestream status every minute
    const interval = setInterval(checkLivestreamStatus, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isLive ? (
        <YouTube videoId={videoId} />
      ) : (
        <p>The livestream is currently not active.</p>
      )}
    </div>
  );
};

export default Livestream;
