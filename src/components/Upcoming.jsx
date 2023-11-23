import { useState, useEffect } from 'react'
import { Reveal } from '../hooks/Reveal';
import { motion } from 'framer-motion'


function UpcomingEvents() {

    const [upcoming, setUpcoming] = useState([]);

    function getUpcoming () {
      let QUERY = encodeURIComponent(
        '*[_type == "events"] | order(date asc) [0...3] {date, title, "imageUrl": image.asset->url}'
      );
        let URL = `https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${import.meta.env.VITE_SANITY_DATASET}?query=${QUERY}`;

        // fetch the content
        fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
            if (result.length > 0) {
            // let recent = result.splice(0, 3)
            setUpcoming(result);
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
      <Reveal>
          <h1>Upcoming Events</h1>
          <Reveal>

          <motion.div className='event-imgs' >
          {upcoming && upcoming.map((up) => (
            <Reveal>
            <div className='event-imgs-inner'>
              <motion.img src={up.imageUrl} key={up.id} className='upcoming' whileHover={{ scale: 1.1}}></motion.img>
              <div className='event-details'>
                <h5>{up.title}</h5>
                <p>{up.date}</p>
              </div>
            </div>
            </Reveal>
        ))}
          </motion.div>
        </Reveal>
          
        </Reveal>
        </section>
      </>
    )
  }
  
  export default UpcomingEvents
  