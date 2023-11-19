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
            <h1 className="message-title">Our Lead Pastor</h1>
            <p className="pastor-message">
            Tosin Martins is a seasoned teacher of God's word. Known to the world as a Love Singer, for his first-ever released song Olo mi in 2004, he has spent much of his adult life as a MINISTER, ENTERTAINER, SINGER (M.E.S.).
            Originally trained as a Lawyer but recognizing the gift of the word and the gap from his school days, as well as the urgent need to establish a learning path for the younger generation of believers to rise to more, he answered the call to full-time ministry having served for almost 2 decades at This Present House, and began The FRANCHISE Church in 2018.

            </p>
          </div>
        </div>
        <div className="about-franchise">
          <div className="vision-box box">
            <h1 className="title">Our Vision</h1>
            <p className="vision">
            "...This is THE LIFE, The FRANCHISE of Christ. Here on earth, as in Heaven"
            </p>
          </div>
          <div className="mission-box box">
            <h1 className="title">Our Mision</h1>
            <p className="mission">
            Get everyone in our midst to RISE TO MORE and become full expressions of God in our respective areas of life and work.
            </p>
          </div>
        </div>
        <div className="about-us">
          <h1>About Us</h1>
          <p className="about-text">
          The FRANCHISE is a community of believers whose desire is to reveal God's model for life here on Earth, as in heaven.
          We recognize that our worship to God goes beyond the meeting, and into the OFFICES to which we find ourselves on a daily basis.

          Hence, the reason THIS IS HOME; a place of comfort, strength, rebuke, love, and nutrients for growth.

          </p>
        </div>
      </div>
        {/* <PodcastPlayer /> */}
        <NewsletterSection  />
        </>
    )
  }
  
  export default About
  