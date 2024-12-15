
const HeroBanner = () => {
  return(
  <section className="hero-banner text-center text-white">
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <div>
        <h1>QuickRent</h1>
        <p>Your one-stop solution for renting gadgets effortlessly</p>
        <a href="#gadgets" className="btn btn-primary btn-lg">Explore Rentals</a>
      </div>
    </div>
  </section>
);
}

export default HeroBanner;