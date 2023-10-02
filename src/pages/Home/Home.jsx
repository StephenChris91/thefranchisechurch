import EngageSection from '../../components/EngageSection';
import FeaturesBox from '../../components/Features';
import Header from '../../components/Header';
import IntroBox from '../../components/IntroBox';
import PodcastPlayer from '../../components/PodcastPlayer';
import Slider from '../../components/Slider';
import NewsletterSection from '../../components/NewsletterSection';

function Home() {

  return (
    <div className='main'>
      <Header />
      <IntroBox />
      <FeaturesBox />
      <EngageSection />
      <Slider />
      {/* <PodcastPlayer /> */}
      <NewsletterSection />
    </div>
  )
}

export default Home
