import { useState, useEffect } from 'react'

import EngageSection from '../../components/EngageSection';
import FeaturesBox from '../../components/Features';
import Header from '../../components/Header';
import IntroBox from '../../components/IntroBox';
import PodcastPlayer from '../../components/PodcastPlayer';
import GallerySlider from '../../components/GallerySlider';
import NewsletterSection from '../../components/NewsletterSection';
import Upcoming from '../../components/Upcoming';
// import Header from '../../components/Header';

import { sliderImages } from '../../components/utils/sliderImages';
import Slider from '../../components/Slider';
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
      {/* <Header /> */}
      {loading ? <Spinner /> : (
        <>
          {/* <Slider  sliders={sliderImages}/> */}
          <Header />
          <IntroBox />
          {/* <FeaturesBox /> */}
          <Upcoming />
          <EngageSection />
          {/* <GallerySlider /> */}
          <PodcastPlayer />
          <MissionSection />
          {/* <NewsletterSection /> */}
        </>
      )}
    </div>
  )
}

export default Home
