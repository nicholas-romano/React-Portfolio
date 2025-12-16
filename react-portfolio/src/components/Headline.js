import React from "react";

function Headline() {
  function scrollFunction() {
    const element = document.getElementById("project_porfolio");
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="headline"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL +
          "/images/headline-photos/mountain_peak_summit.jpg"
        })`,
      }}
    >
      <div className="headline-text">
        <div className="headline-title">
          <h1>World Traveler</h1>
          <h3>Your Next Destination Awaits!</h3>
        </div>

        <div className="headline-subtext">
          <h5>
            The World Traveler application uses a global interactive map that
            the user can click on and add a geolocation pin that they can use to
            save their experiences.
          </h5>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={scrollFunction}
        >
          See projects
          <br />
          &dArr;
        </button>
      </div>
    </section>
  );
}

export default Headline;
