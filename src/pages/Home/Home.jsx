import FeaturesBox from '../../components/Features';
import Header from '../../components/Header';
import IntroBox from '../../components/IntroBox';
import Slider from '../../components/Slider';

function Home() {

  return (
    <div className='main'>
      <Header />
      <IntroBox />
      <FeaturesBox />
      <Slider />
    </div>
  )
}

export default Home
