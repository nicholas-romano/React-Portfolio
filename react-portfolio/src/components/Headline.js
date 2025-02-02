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
          "/images/headline-photos/The-Wild-Oasis-Cover.png"
        })`,
      }}
    >
      <div className="headline-text">
        <div className="headline-title">
          <h1>The Wild Oasis</h1>
          <h3>Welcome to paradise</h3>
        </div>

        <div className="headline-subtext">
          <h5>
            My latest featured project is a luxury cabin rental application with
            beautiful cabin photos, search filters, interactive calendars, and
            booking managment forms.
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
