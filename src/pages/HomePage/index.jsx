import { useState } from 'react';
import { useEffect } from 'react';
import { Rooms } from '../../components/Rooms';
import { RoomDetails } from '../../components/RoomDetails';

export const HomePage = () => {
  const [rooms, setRooms] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(0);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.data);
      console.log(data.data);
    };
    fetchRooms();
  }, []);

  console.log(selectedRoomId);

  return (
    <>
      {rooms !== null ? (
        <main>
          <Rooms rooms={rooms} onSelect={setSelectedRoomId} />
          {rooms && selectedRoomId ? (
            <RoomDetails selectedRoom={rooms[selectedRoomId]} />
          ) : null}
        </main>
      ) : null}
    </>
  );
};
