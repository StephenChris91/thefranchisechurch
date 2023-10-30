import {Link} from 'react-router-dom';


function EngageSection(  ) {

    return (
      <>
        <div className="engage-wrapper">
            <div className="engage-box box-1">
              <Link to='/about'>
                <h1>I NEED PRAYER</h1>
              </Link>
            </div>
            <div className="engage-box box-2">
              <Link to='/join-us'>
                <h1>GET INVOLVED</h1>
              </Link>
            </div>
        </div>
      </>
    )
  }
  
  export default EngageSection
  