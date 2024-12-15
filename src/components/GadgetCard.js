const GadgetCard = ({ image, title, price }) => (
  <div className="col-md-4">
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Starting at {price}</p>
        <button className="btn btn-primary">Rent Now</button>
      </div>
    </div>
  </div>
);

export default GadgetCard;
