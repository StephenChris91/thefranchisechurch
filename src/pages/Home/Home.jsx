import { useState, useEffect } from 'react'
import EngageSection from '../../components/EngageSection';
import Header from '../../components/Header';
import IntroBox from '../../components/IntroBox';
import PodcastPlayer from '../../components/PodcastPlayer';
import Upcoming from '../../components/Upcoming';
import Spinner from '../../components/Loader';
import MissionSection from '../../components/MissionSection';


function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='main'>
      {loading ? <Spinner /> : (
        <>
          <Header />
          <IntroBox />
          <Upcoming />
          <EngageSection />
          <PodcastPlayer />
          <MissionSection />
        </>
      )}
    </div>
  )
}

export default Home
