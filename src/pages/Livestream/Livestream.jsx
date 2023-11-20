// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import YouTube from 'react-youtube';



// const Livestream = () => {
//   const [post, setPost] = useState();

//   useEffect(() => {
//   axios({
//     method: "GET",
//     url: "https://www.googleapis.com/youtube/v3/search",
//     params: {
//       part: "id,snippet",
//       eventType: "live",
//       channelId:import.meta.env.VITE_YOUTUBE_ID,
//       type: "video",
//       key: import.meta.env.VITE_YOUTUBE_API_KEY, // Replace with your actual API key
//       maxResults: "1",
//       order: "date",
//     },
//   })
//     .then((res) => {
//       console.log(res.data)
//       if (res.data.items && res.data.items.length > 0) {
//         var post = {
//           videoId: res.data.items[0].id.videoId,
//           title: res.data.items[0].snippet.title,
//           description: res.data.items[0].snippet.description,
//           thumbnail: res.data.items[0].snippet.thumbnails.default.url,
//         };

//         console.log(post);
//         setPost(post);
//       } else {
//         // Handle the case when no live stream is found
//         console.log("No live stream found");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }, [post]);

//   const opts = {
//     height: "auto",
//     width: "90%",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//       origin:"https://thitsarparami.org/"
//     },
//  };

//  const _onReady = (event) => {
//    // access to player in all event handlers via event.target
//    event.target.pauseVideo();
//  };

//  return (
//    <div>
//       <div className="stream-wrapper">
//          {post ? (<YouTube videoId={post.videoId} opts={opts} onReady={_onReady} />) : <h1>Church Service is yet to begin. Please stay tuned</h1>} 
//       {/* <YouTube videoId="IAr_yjzD0Yg?si" opts={opts} /> */}
//   </div>
// </div>
//   );
// };

// export default Livestream;


// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import YouTube from 'react-youtube';
// import SundayTimer from '../../components/SundayTimer'
// import FranchisePrays from "../../components/FranchisePrays";

// const Livestream = () => {
//   const [post, setPost] = useState();
//   const [isSunday, setIsSunday] = useState(false);

//   useEffect(() => {
//     // Check if it's Sunday
//     const now = new Date();
//     if (now.getDay() === 0 && now.getHours() === 10) {
//       setIsSunday(true);
//     } 

//     // Reload the page every Sunday at 10 am
//     if (isSunday) {
//       const currentTime = new Date();
//       const sunday10AM = new Date(currentTime);
//       sunday10AM.setHours(10, 0, 0, 0); // Set the time to 10:00:00
//       const timeUntilReload = sunday10AM - currentTime;

//       if (timeUntilReload > 0) {
//         // Schedule a page reload when it's Sunday at 10 am
//         const reloadInterval = setInterval(() => {
//           if (new Date().getDay() === 0 && new Date().getHours() === 10) {
//             // It's Sunday at 10 am, reload the page
//             clearInterval(reloadInterval);
//             window.location.reload();
//           }
//         }, timeUntilReload);
//       }
//     }

//     // Fetch YouTube live stream data
//     if (isSunday) {
//       axios({
//         method: "GET",
//         url: "https://www.googleapis.com/youtube/v3/search",
//         params: {
//           part: "id,snippet",
//           eventType: "live",
//           channelId: import.meta.env.VITE_YOUTUBE_ID,
//           type: "video",
//           key: import.meta.env.VITE_YOUTUBE_API_KEY,
//           maxResults: "1",
//           order: "date",
//         },
//       })
//         .then((res) => {
//           if (res.data.items && res.data.items.length > 0) {
//             var post = {
//               videoId: res.data.items[0].id.videoId,
//               title: res.data.items[0].snippet.title,
//               description: res.data.items[0].snippet.description,
//               thumbnail: res.data.items[0].snippet.thumbnails.default.url,
//             };

//             setPost(post);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
//     }
//   }, [isSunday]);

//   const opts = {
//     height: "390",
//     width: "640",
//     playerVars: {
//       autoplay: 1,
//       origin: "https://thitsarparami.org/"
//     },
//   };

//   const _onReady = (event) => {
//     event.target.pauseVideo();
//   };

//   return (
//     <div>
//       <div className="stream-wrapper"> 
//         {post && isSunday ?  (
//           <YouTube videoId={post.videoId} opts={opts} onReady={_onReady} />
//         ) : <SundayTimer />
//         }
//       <FranchisePrays />
//       </div>
//     </div>
//   );
// };

// export default Livestream;

// import React, { useState, useEffect } from "react";
// import YouTube from 'react-youtube';
// import SundayTimer from '../../components/SundayTimer';
// import FranchisePrays from "../../components/FranchisePrays";
// import useYoutubeLive from '../../hooks/useYoutubeLive'; // Import your custom hook

// const Livestream = () => {
//   const channelId = import.meta.env.VITE_YOUTUBE_ID; // Replace with your channel ID
//   const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY; // Replace with your API key

//   const liveData = useYoutubeLive(channelId, apiKey);

//   const opts = {
//     height: "390",
//     width: "640",
//     playerVars: {
//       autoplay: 1,
//       origin: "https://thitsarparami.org/",
//     },
//   };

//   const _onReady = (event) => {
//     event.target.pauseVideo();
//   };

//   return (
//     <div>
//       <div className="stream-wrapper"> 
//         {liveData ? (
//           <YouTube videoId={liveData.videoId} opts={opts} onReady={_onReady} />
//         ) : (
//           <SundayTimer />
//         )}
//         <FranchisePrays />
//       </div>
//     </div>
//   );
// };

// export default Livestream;
import { useState } from 'react';
import YoutubeIframe from "../../hooks/Livestream";
import SundayTimer from "../../components/SundayTimer";
import FranchisePrays from "../../components/FranchisePrays";


export default function Livestream() {
  const channelId = import.meta.env.VITE_YOUTUBE_ID;
  
  const [isLive, setIsLive] = useState(false)

  return (
    <div className="stream">
      {!isLive ? <SundayTimer /> : 
      <YoutubeIframe channelId={channelId} autoplay isLive={isLive}/>
      }
      <FranchisePrays />
    </div>
  );
}


