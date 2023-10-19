import React from "react";

const FranchisePrays = () => {
  const zoomMeetingUrl = "https://zoom.us/j/89093402610";

  // Function to open Zoom in the client app
  const joinZoomClient = () => {
    const meetingID = 89093402610
    window.location.href = `zoommtg://zoom.us/join?confno=${meetingID}`;
  };

  // Function to open Zoom in the browser
  const joinZoomBrowser = () => {
    window.open(zoomMeetingUrl, "_blank");
  };

  return (
    <div className="prays-wrapper">
      <h1>Join Us in Prayer Every Friday</h1>
      <div className="prays-btn">
        <button onClick={joinZoomClient}>Join in Zoom App</button>
        <button onClick={joinZoomBrowser}>Join in Browser</button>
      </div>
    </div>
  );
};

export default FranchisePrays;
