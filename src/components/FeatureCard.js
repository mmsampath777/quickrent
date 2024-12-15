const FeatureCard = ({ icon, title, description }) => (
  <div className="col-md-4">
    <i className={`fa ${icon} fa-3x`}></i>
    <h4 className="mt-3">{title}</h4>
    <p>{description}</p>
  </div>
);

export default FeatureCard;