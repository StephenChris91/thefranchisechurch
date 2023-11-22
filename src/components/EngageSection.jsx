import {Link} from 'react-router-dom';
import { Reveal } from '../hooks/Reveal';


function EngageSection(  ) {

    return (
      <>
        <div className="engage-wrapper">
          <div className="overlay"></div>
          <div className='engage-content'>
            <Reveal>
            <h2>OUR VISION</h2>
            </Reveal>
            <Reveal>
            <p>"...This is THE LIFE, The FRANCHISE of Christ. Here on earth, as in Heaven"</p>
            </Reveal>
          </div>
        </div>
      </>
    )
  }
  
  export default EngageSection
  