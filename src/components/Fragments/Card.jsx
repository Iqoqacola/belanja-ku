const Card = ({ title, desc, img, price }) => {
  return (
    <>
      <div id="card">
        <div className="card bg-background-color w-96 shadow-sm">
          <figure className="p-8 bg-accent-color">
            <img className="w-34 h-46" src={img} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title h-14">{title}</h2>
            <p className="h-18">{desc}</p>
            <h4 className="font-bold">${price}</h4>
            <div className="card-actions justify-end">
              <button className="btn bg-primary-color">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
