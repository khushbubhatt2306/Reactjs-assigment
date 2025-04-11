import React from "react";
import Header from "../coman/Header";

function Home() {
  return (
    <div>
      <Header />
      <section>
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="hero-section">
                <img
                  className="hero-img"
                  alt="Hero"
                  src="https://cdn.buttercms.com/ABLMHkjbRliZPESFckI1"
                />
                <div className="dark-overlay" />
                <img
                  className="hero-img-second"
                  alt="Hero Second"
                  src="https://cdn.buttercms.com/xuxxklJUTf2h5QBifg90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Service-section">
          <div className="container">
            <div className="service-inner-content">
              <h2 className="service-headline">On Deck - Our Blog</h2>
              <p className="service-subline">
                Since then, Peter has become a bat-making craftsman. For almost
                10 years, Peter turned the highest quality wood bats for
                thousands of competitive baseball players across the country,
                all from their Minnesota factory. More recently, Peter coupled
                his bat making expertise with his engineering know-how and
                partnered with a handful of other engineering experts &amp;
                baseball lifers to change the direction of the company, and the
                future of baseball.
              </p>
            </div>
            <div className="service-card">
              <div className="container">
                <div className="row">
                  <div className="service-row col-lg-4 col-md-6 col-12">
                    <div className="card-container">
                      <img
                        className="service-img"
                        alt="True wood look, feel and sound"
                        src="https://cdn.buttercms.com/05J9w6tS62PQwn2kcefQ"
                      />
                      <h3 className="service-type-name">
                        True wood look, feel and sound
                      </h3>
                      <p className="service-description">
                        FZN is a true wood bat that gives hitters the unrivaled
                        feel, classic sound and clean look of a traditional
                        stick.
                      </p>
                    </div>
                  </div>
                  <div className="service-row col-lg-4 col-md-6 col-12">
                    <div className="card-container">
                      <img
                        className="service-img"
                        alt="Maximum BBCOR specs and performance"
                        src="https://cdn.buttercms.com/l43dm56UTRaPIv2QMhFn"
                      />
                      <h3 className="service-type-name">
                        Maximum BBCOR specs and performance
                      </h3>
                      <p className="service-description">
                        FZN delivers MAX trampoline effect allowed by BBCOR
                        across a HUGE sweet spot of a 2 5/8' barrel
                      </p>
                    </div>
                  </div>
                  <div className="service-row col-lg-4 col-md-6 col-12">
                    <div className="card-container">
                      <img
                        className="service-img"
                        alt="Completely Custom"
                        src="https://cdn.buttercms.com/tZTA5CKVTaWjs51JnKbA"
                      />
                      <h3 className="service-type-name">Completely Custom</h3>
                      <p className="service-description">
                        {" "}
                        species of wood, 17+ models, 24 color options, 22
                        trademark colors, and personalization, give you the
                        opportunity to create the ultimate gamer that is
                        uniquely yours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="out-story-section">
          <div className="container">
            <div className="row align-items-center">
              {/* Image column */}
              <div className="col-lg-6 col-12">
                <div className="story-img-part">
                  <img
                    className="story-img img-fluid"
                    alt="Delano Story"
                    src="https://cdn.buttercms.com/cRTwzfKwQUi6n7c2exzG"
                  />
                </div>
              </div>

              {/* Text column */}
              <div className="col-lg-6 col-12">
                <div className="story-content-part">
                  <div className="story-content">
                    <h3 className="section-title">Our Story</h3>
                    <p className="story-headline">Delano Bat Company</p>
                    <p className="story-des">
                      Delano is a small company with a big vision - to bring
                      innovation to the great game of baseball while staying
                      true to the unique roots, traditions and history of
                      America's Pastime.
                    </p>
                    <a className="readbtn" href="#">
                      Read Our Story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
