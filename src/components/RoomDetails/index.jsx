import { Description } from '../Description';
import { Registration } from '../Registration';

export const RoomDetails = ({ selectedRoom }) => {
  console.log('roomdetail', selectedRoom);

  return (
    <section className="light">
      <div className="container">
        <h2>Heading</h2>
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
