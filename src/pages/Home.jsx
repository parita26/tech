import React from "react";

function Home() {

  const goContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="home" id="home">

      <h1>welcome to website</h1>

      <p>
        We create beautiful responsive websites for businesses,
        startups and developers. Our websites work perfectly
        on desktop, tablet and mobile devices.
      </p>

      <button onClick={goContact}>Contact Us</button>

      {/* Reviews */}

      <div className="reviews">

        <div className="reviewCard">
          <h3>Jeel Patel</h3>
          <p>
            This website design is very clean and modern.
            It works perfectly on my phone and laptop.
          </p>
        </div>

        <div className="reviewCard">
          <h3>Neha Shah</h3>
          <p>
            Amazing responsive design. The contact form
            and layout are simple and professional.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Home;