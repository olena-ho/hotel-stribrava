import './style.css';
import { RoomCard } from '../RoomCard';

export const Rooms = ({rooms}) => {
  const renderRoomCards = () => {
    return rooms.map((room) => (
      <RoomCard
        key={room.id}
        title={room.name}
        body={`${room.price} kč za osobu`}
        image={room.image}
      />
    ));
  };

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {renderRoomCards()}
        </div>
      </div>
    </section>
  );
}
