import { useState, useEffect } from 'react'


function FeaturesBox() {

    const [upcoming, setUpcoming] = useState([]);

    function getUpcoming () {
        let QUERY = encodeURIComponent(`*[_type == "events"]{date, title, "imageUrl": image.asset->url}`);
        let URL = `https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${import.meta.env.VITE_SANITY_DATASET}?query=${QUERY}`;

        // fetch the content
        fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
            if (result.length > 0) {
                let recent = result.splice(0, 3)
            setUpcoming(recent);
            console.log(upcoming)
            }
            // console.log(upcoming)
        })
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getUpcoming()
    }, [])

    return (
      <>
        <section className='upcoming-wrapper'>
          {upcoming && upcoming.map((up) => (
            <>
                <h2>Upcoming Events</h2>
                <img src={up.imageUrl} key={up.id} className='upcoming'></img>
            </>
          ))}
        </section>
      </>
    )
  }
  
  export default FeaturesBox
  