import { useState } from 'react';
import { useEffect } from 'react';
import { Rooms } from '../../components/Rooms';
import { RoomDetails } from '../../components/RoomDetails';


export const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  
  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("http://localhost:4000/api/rooms");
      const data = await response.json();
      setRooms(data.data);
      console.log(data.data);
    };
    fetchRooms();
  }, []);
  
  
  return (
    <main>
      <Rooms rooms={ rooms } />
      <RoomDetails />
    </main>
  );
};

