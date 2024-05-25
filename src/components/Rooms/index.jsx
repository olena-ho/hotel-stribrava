import './style.css';
import { RoomCard } from '../RoomCard';
import ukryt from './img/pokoj01.jpg';
import zaklad from './img/pokoj02.jpg';
import klasik from './img/pokoj03.jpg';
import komfort from './img/pokoj04.jpg';
import luxus from './img/pokoj05.jpg';

export const Rooms = () => {
  return (
    <section className="dark">
    <div className="container">
      <h2>Naše pokoje</h2>
      <p>
        Vzberte si, který z našich pokoju je pro vás ten pravý.
      </p>
      <div className="cards-row">
      <RoomCard title="Ukryt" body="450 kč za osobu" image={ukryt} />
      <RoomCard title="Základ" body="700 kč za osobu" image={zaklad} />
      <RoomCard title="Klasik" body="1200 kč za osobu" image={klasik} />
      <RoomCard title="Komfort" body="2500 kč za osobu" image={komfort} />
      <RoomCard title="Luxus" body="8000 kč za osobu" image={luxus} />

      </div>
    </div>
  </section>
  );
}
