import React from "react";

function Services() {
  return (
    <section className="services" id="services">

      <h2>Our Services</h2>

      <div className="serviceContainer">

        <div className="serviceCard">
          <h3>Website Development</h3>
          <p>
            We build responsive websites that work on
            desktop, tablet and smartphones.
          </p>
        </div>

        <div className="serviceCard">
          <h3>UI / UX Design</h3>
          <p>
            Modern and clean user interface designs
            for better user experience.
          </p>
        </div>

        <div className="serviceCard">
          <h3>React Applications</h3>
          <p>
            High performance web applications
            using React technology.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;