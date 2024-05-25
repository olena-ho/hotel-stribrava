import './style.css';
import { RoomCard } from '../RoomCard';
// import ukryt from '';
// import zaklad from '../../../assets/img/pokoj02.jpg';
// import klasik from '../../../assets/img/pokoj03.jpg';
// import komfort from '../../../assets/img/pokoj04.jpg';
// import luxus from '../../../assets/img/pokoj05.jpg';

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
