import { useState } from 'react';
import { Rooms } from '../../components/Rooms';


export const HomePage = () => {

 /*  const [journey, setJourney] = useState(null);

  function handleJourneyChange (journeyData) {
    setJourney(journeyData);
    }
 */
  return (
    <main>
      <Rooms/>
      <RoomDetail/>
    </main>
  );
};

