// import Navbar from "./Navbar"
import ReactPlayer from 'react-player'


function IntroBox(  ) {

    return (
      <>
        <div className="box-wrapper">
        <ReactPlayer url={'https://www.youtube.com/shorts/vkrI3HYeXJ4'} controls={false} className='intro-player'/>
            <div className='intro-text'>
                <h5 className="intro-accent">Lorem ipsum dolor sit amet.</h5>
                <h2 className="intro-header">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia optio magni officiis corrupti. Saepe consequuntur dolores molestiae provident culpa error.</h2>
                <p className="intro-summary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis voluptates eius inventore quaerat dolores.</p>
                <button> Get to know us</button>
            </div>
        </div>
      </>
    )
  }
  
  export default IntroBox
  