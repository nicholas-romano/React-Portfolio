import React from "react";

function Headline() {
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
      <div class="headline-text">
        <div class="headline-title">
          <h1>The Wild Oasis</h1>
          <h3>Welcome to paradise</h3>
        </div>

        <div class="headline-subtext">
          <h5>
            My latest featured project is a luxury cabin rental application with
            beautiful cabin photos, search filters, interactive calendars, and
            booking managment forms.
          </h5>
        </div>

        <a
          href="https://the-wild-oasis-swart-mu.vercel.app/"
          target="_blank"
          title="The Wild Oasis"
          rel="noopener noreferrer"
        >
          <button type="button" class="btn btn-primary">
            See project &gt;&gt;
          </button>
        </a>
      </div>
    </section>
  );
}

export default Headline;
