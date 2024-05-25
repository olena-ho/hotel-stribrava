import './style.css';
import mapa from './img/mapa.png';

export const Footer = () => {
  return (
    <footer>
      <section className="dark">
    <div className="container columns-2">
      <div className="columns">
        <h2>Kontakt</h2>
        <p className="adress">
          Hotel Střibrava <br/> 
          Ke Kamenné lávce 12 <br/>
          317 24 Libnice nad Střibravou
        </p>
        <a href="mailto:recepce@hotelstribrava.cz">recepce@hotelstribrava.cz</a>
      </div>
      <img src={mapa} alt="map" />
    </div>
  </section>
    </footer>
  );
}
