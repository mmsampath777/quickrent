import GadgetCard from "./GadgetCard";

const GadgetListing = () => (
  <section id="gadgets" className="gadget-listing py-5">
    <div className="container">
      <h2 className="text-center">Available Gadgets</h2>
      <div className="row mt-5">
        <GadgetCard
          image="/images/computer.jpg"
          title="Laptop"
          price="$20/day"
        />
        <GadgetCard
          image="/images/camera.jpg"
          title="Camera"
          price="$15/day"
        />
        <GadgetCard 
          image="/images/sony.jpg"
          title="Gaming Console"
          price="$25/day"
        />
      </div>
    </div>
  </section>
);

export default GadgetListing;