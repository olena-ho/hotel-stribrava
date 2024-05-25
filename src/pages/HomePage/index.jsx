import { useState } from 'react';
import { Rooms } from '../../components/Rooms';
import { RoomDetails } from '../../components/RoomDetails';


export const HomePage = () => {

 /*  const [journey, setJourney] = useState(null);

  function handleJourneyChange (journeyData) {
    setJourney(journeyData);
    }
 */
  return (
    <main>
      <Rooms/>
      <RoomDetails />
    </main>
  );
};
