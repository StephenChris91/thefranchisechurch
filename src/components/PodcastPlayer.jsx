import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const PodcastPlayer = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
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
        // https://open.spotify.com/show/2ADGKfmCD2tioFbdzM7if8?si=c0a4959bc5854535

        // Step 2: Get Podcast Episodes
        const podcastId = "2ADGKfmCD2tioFbdzM7if8" // Replace with your Spotify podcast ID
        console.log(podcastId)
        const episodesResponse = await axios.get(
          `https://api.spotify.com/v1/shows/${podcastId}/episodes`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const recentEpisodes = episodesResponse.data.items.slice(0, 3);
        setEpisodes(recentEpisodes);
        console.log(recentEpisodes)
      } catch (error) {
        console.error('Error fetching Spotify podcast episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div className='podcast-wrapper'>
      {episodes.map((episode, index) => (
        <div key={index} className='podcast'>
          <div className='podcast-details'>
            <img src={episode.images[0].url} alt=""/>
            <div>
              <h3>{episode.name}</h3>
              <p>{episode.description}</p>
              <ReactPlayer url={episode.audio_preview_url} controls={true} className='player'/>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PodcastPlayer;
