import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import ReactPlayer from 'react-player'

const PodcastPlayer = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // Use a CORS proxy if needed
      const feedUrl = 'https://anchor.fm/s/aec53858/podcast/rss';
      const parser = new Parser();
      
      try {
        const feed = await parser.parseURL(CORS_PROXY + feedUrl);
        const recentEpisodes = feed.items.slice(0, 3); // Get the most recent 3 episodes
        setEpisodes(recentEpisodes);
      } catch (error) {
        console.error('Error fetching podcast feed:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div>
      {episodes.map((episode, index) => (
        <div key={index}>
          <h3>{episode.title}</h3>
          <p>{episode.contentSnippet}</p>
          {/* You can include a player here using one of the methods mentioned earlier */}
          <ReactPlayer url={'https://www.youtube.com/shorts/vkrI3HYeXJ4'} controls={true} />          <hr />
        </div>
      ))}
    </div>
  );
};

export default PodcastPlayer;
