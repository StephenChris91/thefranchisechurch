import { useState, useEffect } from 'react'

import EngageSection from '../../components/EngageSection';
import FeaturesBox from '../../components/Features';
import Header from '../../components/Header';
import IntroBox from '../../components/IntroBox';
import PodcastPlayer from '../../components/PodcastPlayer';
import GallerySlider from '../../components/GallerySlider';
import NewsletterSection from '../../components/NewsletterSection';

import { sliderImages } from '../../components/utils/sliderImages';
import Slider from '../../components/Slider';
import Spinner from '../../components/Loader';


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
          <Slider  sliders={sliderImages}/>
          <IntroBox />
          <FeaturesBox />
          <EngageSection />
          <GallerySlider />
          <PodcastPlayer />
          <NewsletterSection />
        </>
      )}
    </div>
  )
}

export default Home
