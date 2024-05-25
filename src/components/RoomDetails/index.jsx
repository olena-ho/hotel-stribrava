import { Description } from '../Description';
import { Registration } from '../Registration';

export const RoomDetails = () => {

  return (
    <section className="light">
      <div className="container">
        <h2>Heading</h2>
        <div className="columns-2">
          <Description />
          <Registration />
        </div>
      </div>
    </section>
  );
};
