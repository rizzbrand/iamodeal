import React from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>BIO</h1>
          <h1>01</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <img src="/about/about-hero.jpg" alt="" />
          </div>
        </section>

        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
            Odeal has consistently proven himself to be a formidable artistic force. The 25-year-old artist was born in Germany and raised in Spain, 
            the U.K. and Nigeria before settling down in the U.K. when he was 17, shortly before he embarked on his solo career. 
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
            His self-produced single
            'Be Easy' caught the attention of Afro legend Tiwa Savage.
            </AnimatedCopy>

            {/* <AnimatedCopy animateOnScroll={true} tag="h3">
              Every project is a new collaboration, a new challenge, and a new
              chance to create something meaningful. If it moves someone, even
              for a second — it's done its job.
            </AnimatedCopy> */}
          </div>
        </section>

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src="/about/services-banner.jpg" alt="" />
            </div>
            {/* <p className="primary">Crafted with Intention</p> */}
          </div>
          <div className="services-col">
            <h4>
              Every project is a chance to explore new visual language, push
              creative boundaries, and tell stories that feel real. I approach
              each film with care, precision, and purpose.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Goldern Dreams</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    From short films to personal narratives, my work is driven
                    by emotion and atmosphere. I handle direction,
                    cinematography, and editing — crafting each piece with a
                    filmmaker’s eye for mood, movement, and meaning.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Afro futurism</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    I create visuals that speak — whether it’s a quiet moment or
                    a bold idea. My work blends aesthetic choices with story
                    clarity, making sure the emotional core always comes
                    through.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Mignight dreams</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    From ideation to final cut, I guide the visual and narrative
                    tone of every project. I bring a cohesive, cinematic vision
                    that aligns story, style, and intention — grounded in
                    authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <video 
              src="/about/bio.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            ></video>
          </div>
        </section>

        <section className="fav-tools">
          <div className="fav-tools-header">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Daily Stack
            </AnimatedCopy>
            <AnimatedCopy tag="h2" animateOnScroll={true} delay={0.25}>
             Socials
            </AnimatedCopy>
            <AnimatedCopy
              tag="p"
              animateOnScroll={true}
              className="secondary"
              delay={0.5}
            >
              My favorite stack includes Framer, Figma, and other cutting-edge
              technologies to ensure seamless and dynamic designs.
            </AnimatedCopy>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-1.jpg" alt="" />
                </div>
                <a href="https://www.instagram.com/iamodeal/"><h4>Instagram</h4></a>
                {/* <p className="primary sm">Color Grading</p> */}
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-2.jpg" alt="" />
                </div>
                <a href="https://www.instagram.com/iamodeal/"><h4>Tiktok</h4></a>
                {/* <p className="primary sm">Video Editing</p> */}
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-3.jpg" alt="" />
                </div>
                <a href="https://x.com/iamodeal"><h4>X</h4></a>
                {/* <p className="primary sm">Cinematic Shooting</p> */}
              </div>
            </div>
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-4.jpg" alt="" />
                </div>
                <a href="https://open.spotify.com/artist/2BPwxhCvvcb8xDl8GWIjbh"><h4>Spotify</h4></a>
                {/* <p className="primary sm">Visual References</p> */}
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-5.jpg" alt="" />
                </div>
                <a href="https://www.youtube.com/@iamodeal"><h4>Youtube</h4></a>
                {/* <p className="primary sm">Remote Collaboration</p> */}
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-6.jpg" alt="" />
                </div>
               {/* <a href="https://music.apple.com/gb/artist/odeal/1221904128"> <h4>Apple music</h4> </a>
                <p className="primary sm">Scriptwriting Tool</p> */}
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
