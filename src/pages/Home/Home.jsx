import EngageSection from '../../components/EngageSection';
import FeaturesBox from '../../components/Features';
import Header from '../../components/Header';
import IntroBox from '../../components/IntroBox';
import PodcastPlayer from '../../components/PodcastPlayer';
import GallerySlider from '../../components/GallerySlider';
import NewsletterSection from '../../components/NewsletterSection';

import { sliderImages } from '../../components/utils/sliderImages';
import Slider from '../../components/Slider';


function Home() {

  return (
    <div className='main'>
      {/* <Header /> */}
      <Slider  sliders={sliderImages}/>
      <IntroBox />
      <FeaturesBox />
      <EngageSection />
      <GallerySlider />
      <PodcastPlayer />
      <NewsletterSection />
    </div>
  )
}

export default Home
