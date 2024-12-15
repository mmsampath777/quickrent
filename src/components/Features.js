import FeatureCard from "./FeatureCard";

const Features = () => (
  <section id="features" className="features text-center py-5 bg-light">
    <div className="container">
      <h2>Why Choose QuickRent?</h2>
      <div className="row mt-5">
        <FeatureCard
          icon="fa-laptop"
          title="Wide Variety of Gadgets"
          description="Choose from a diverse range of laptops, cameras, gaming consoles, and more."
        />
        <FeatureCard
          icon="fa-dollar-sign"
          title="Affordable Pricing"
          description="Rent gadgets at competitive rates that fit your budget."
        />
        <FeatureCard
          icon="fa-truck-fast"
          title="Quick Delivery"
          description="Enjoy fast and reliable delivery services right to your doorstep."
        />
      </div>
    </div>
  </section>
);

export default Features;