import EngageSection from '../../components/EngageSection';
import FeaturesBox from '../../components/Features';
import Header from '../../components/Header';
import IntroBox from '../../components/IntroBox';
import PodcastPlayer from '../../components/PodcastPlayer';
import Slider from '../../components/Slider';

function Home() {

  return (
    <div className='main'>
      <Header />
      <IntroBox />
      <FeaturesBox />
      <EngageSection />
      <Slider />
      {/* <PodcastPlayer /> */}
    </div>
  )
}

export default Home
