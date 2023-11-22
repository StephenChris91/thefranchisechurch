import {Link} from 'react-router-dom';
import { Reveal } from '../hooks/Reveal';


function MissionSection(  ) {

    return (
      <>
        <div className="mission-wrapper">
            <div className="overlay"></div>
          <div className='mission-content'>
            <Reveal>
            <h2>OUR MISSION</h2>
            </Reveal>
            <Reveal>
            <p>Get everyone in our midst to RISE TO MORE and become full expressions of God in our respective areas of life and work.</p>
            </Reveal>
          </div>
            
        </div>
      </>
    )
  }
  
  export default MissionSection
  