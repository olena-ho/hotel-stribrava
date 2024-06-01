import { Description } from '../Description';
import { Registration } from '../Registration';

export const RoomDetails = ({ selectedRoom }) => {
  if (!selectedRoom) {
    return <div>No room selected</div>;
  }

  return (
    <section className="light">
      <div className="container">
        <h2>{selectedRoom.name}</h2>
        <div className="columns-2">
          <Description
            name={selectedRoom.name}
            price={selectedRoom.price}
            image={selectedRoom.image}
            description={selectedRoom.description}
          />
          <Registration />
        </div>
      </div>
    </section>
  );
};
