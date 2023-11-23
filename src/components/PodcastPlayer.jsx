import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const PodcastPlayer = () => {
  const [tracklists, setTracklists] = useState([]);

  useEffect(() => {
    const fetchTracklists = async () => {
      const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID; // Your Spotify API client ID
      const clientSecret = import.meta.env.VITE_SPOTIFY_SECRET_KEY; // Your Spotify API client secret

      try {
        // Step 1: Get Access Token
        const accessTokenResponse = await axios.post(
          'https://accounts.spotify.com/api/token',
          new URLSearchParams({
            grant_type: 'client_credentials',
          }),
          {
            headers: {
              Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        const accessToken = accessTokenResponse.data.access_token;

        // Step 2: Get Podcast Tracklists
        const podcastId = "2ADGKfmCD2tioFbdzM7if8"; // Replace with your Spotify podcast ID
        const episodesResponse = await axios.get(
          `https://api.spotify.com/v1/shows/${podcastId}/episodes`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const recentEpisodes = episodesResponse.data.items.slice(0, 3);

        // Step 3: Get Tracklists
        const tracklistPromises = recentEpisodes.map(async (episode) => {
          const tracklistResponse = await axios.get(
            episode.href + '/tracks', // Use the episode's href to get tracks
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          return tracklistResponse.data.items;
        });

        // Wait for all tracklist requests to complete
        const tracklistData = await Promise.all(tracklistPromises);

        setTracklists(tracklistData);
      } catch (error) {
        console.error('Error fetching Spotify podcast tracklists:', error);
      }
    };

    fetchTracklists();
  }, []);

  return (
    <div className='podcast-wrapper'>
      <h1>LATEST MESSAGES</h1>
      <p>Listen to latest messages from our Pastor.</p>
      <button>LISTEN NOW</button>
      {/* {tracklists.map((tracklist, index) => (
        <div key={index} className='podcast'>
          <div className='podcast-details'>
            <h3>Tracklist {index + 1}</h3>
            <ul>
              {tracklist.map((track, trackIndex) => (
                <li key={trackIndex}>{track.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default PodcastPlayer;
