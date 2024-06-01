export const RoomCard = ({ title, body, image, id, onSelect }) => {

  const handleRoomClick = () => {
    onSelect(id); // Викликати onSelect з ідентифікатором кімнати при натисканні
  };

  return (
    <div className="card" onClick={handleRoomClick}>
      <img className="card__image" src={`http://localhost:4000${image}`} />
      <div className="card__title">{title}</div>
      <div className="card__body">{body}</div>
    </div>
  );
};
