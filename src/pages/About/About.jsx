import NewsletterSection from '../../components/NewsletterSection';
import PodcastPlayer from '../../components/PodcastPlayer';
import Slider from '../../components/Slider';

import { sliderImages } from '../../components/utils/sliderImages';

function About() {

    return (
      <>
      <div className='about-wrapper'>
        <div className="pastor-message-section">
          <img src="/assets/images/pastor.png" alt="pastor" />
          <div className="pastor-message-box">
            <h1 className="message-title">Pastor's Welcome Message</h1>
            <p className="pastor-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tristique sapien at lacus euismod, eu tempus erat rhoncus. Integer nec ex in elit
            </p>
          </div>
        </div>
        <div className="about-franchise">
          <div className="vision-box box">
            <h1 className="title">Our Vision</h1>
            <p className="vision">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tristique sapien at lacus euismod, eu tempus erat rhoncus. Integer nec ex in elit
            </p>
          </div>
          <div className="mission-box box">
            <h1 className="title">Our Mision</h1>
            <p className="mission">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tristique sapien at lacus euismod, eu tempus erat rhoncus. Integer nec ex in elit
            </p>
          </div>
        </div>
        <div className="about-us">
          <h1>About Us</h1>
          <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tristique sapien at lacus euismod, eu tempus erat rhoncus. Integer nec ex in elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tristique sapien at lacus euismod, eu tempus erat rhoncus. Integer nec ex in elit
          </p>
        </div>
      </div>
        <PodcastPlayer />
        <NewsletterSection  />
        </>
    )
  }
  
  export default About
  