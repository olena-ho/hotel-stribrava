

export const Description = ({ name, price, image, description }) => {
  

  return (
    <div className="column">
      <p>`Pokoj ${name}, ${ price } kč na osobu za noc`</p>
      <img src={image} />
      <p>{description}</p>
    </div>
  );
};
