export const RoomCard = ({ title, body, image, id, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(id)}>
      <img className="card__image" src={`http://localhost:4000${image}`} />
      <div className="card__title">{title}</div>
      <div className="card__body">{body}</div>
    </div>
  );
};
