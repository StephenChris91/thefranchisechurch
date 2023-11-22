// import Navbar from "./Navbar"
import ReactPlayer from 'react-player'
import { Reveal } from '../hooks/Reveal'


function IntroBox(  ) {

    return (
      <>
        <div className="box-wrapper">
        {/* <ReactPlayer url={'https://www.youtube.com/shorts/vkrI3HYeXJ4'} controls={false} className='intro-player'/> */}
        <Reveal>
          <img src='/assets/images/badge.png' alt='franchise badge' />
        </Reveal>
        <Reveal>
          <div className='intro-text'>
            <h5 className="intro-accent">What We Believe</h5>
              <p className="intro-header">The FRANCHISE believes that our calling is not just thanksgiving but <i>thanksliving</i>—the true expression of our gratitude to God is in living and excelling in every aspect of life; so we utilize all God has put in us to RISE TO MORE. 
              </p>
              <Reveal>
                <button> Get to know us</button>
              </Reveal>
          </div>
        </Reveal>
        </div>
      </>
    )
  }
  
  export default IntroBox
  