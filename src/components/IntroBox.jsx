// import Navbar from "./Navbar"
import ReactPlayer from 'react-player'


function IntroBox(  ) {

    return (
      <>
        <div className="box-wrapper">
        {/* <ReactPlayer url={'https://www.youtube.com/shorts/vkrI3HYeXJ4'} controls={false} className='intro-player'/> */}
        <img src='/assets/images/badge.png' alt='franchise badge' />
            <div className='intro-text'>
                <h5 className="intro-accent">What We Believe</h5>
                {/* <h2 className="intro-header">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia optio magni officiis corrupti. Saepe consequuntur dolores molestiae provident culpa error.</h2> */}
                <h2 className="intro-header">"But when all is said and done,
                    God’s Temple on the mountain,
                Firmly fixed, will dominate all mountains,
                    towering above surrounding hills.
                People will stream to it
                    and many nations set out for it,"
                Mal 4:1 (MSG) 
                </h2>
                <button> Get to know us</button>
            </div>
        </div>
      </>
    )
  }
  
  export default IntroBox
  