import React from "react";
import Layout from "../components/Layout";
import {
  AboutSection,
  ServicesSection,
  Heading,
  HeroSection,
  TestimonialSection,
  ExpertiesSection,
  WorkSection,
  ContactSection,
} from "../styles/home.styles";

const services = [
  {
    icon: "/assets/IconFrontend.png",
    name: "Frontend & Responsive Coding",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
  {
    icon: "/assets/IconInterface.png",
    name: "User Experience & Interface Design",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
  {
    icon: "/assets/IconMarketing.png",
    name: "Social Media & Online Marketing",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
  {
    icon: "/assets/IconMobileApp.png",
    name: "Mobile Application & Game Development",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
];

export default function Home() {
  return (
    <Layout>
      <HeroSection
        className="hero"
        style={{
          backgroundImage: `url(/assets/BgShape.png)`,
        }}
      >
        <div className="hero__content">
          <div className="heading">
            <h1>
              I'm <span className="line">Rahan Bouess</span>
              <br />
              Frontend / React <br /> Developer
              <span className="yellow">.</span>
            </h1>
          </div>
        </div>
      </HeroSection>

      <AboutSection id="aboutme">
        <div className="about__content">
          <img className="about-img" src="/assets/portrait.jpg" alt="ceo" />

          <div className="about__content--main">
            <Heading left>
              <h1 className="title">
                About me <span className="yellow">.</span>
              </h1>
              <div className="links">
                <div className="line"></div>
                <button className="link active">Myself.</button>
                <button className="link">Eductaion.</button>
                <button className="link">Skill.</button>
              </div>
            </Heading>

            <div className="text">
              <p>
                Hello! I’m Rahan Bouess a self-taught & award winning Digital
                Designer & Developer with over tree years work experience. I
                started in my children’s room, got pro at renowned digital
                agencies akij co and nork blue lebel. Now I’m based in China,
                working for Apple fredmansky and enjoying the life in the
                countryside.
              </p>
            </div>

            <div className="more">
              <button className="btn-cv">Download CV</button>
              <button className="btn-hire">Hire Me</button>
            </div>
          </div>
        </div>
      </AboutSection>

      <ExpertiesSection id="experties">
        <div className="experties__content">
          <Heading>
            <h1 className="title">
              Experties<span className="yellow">.</span>
            </h1>
            <div className="number">
              O2 <div className="line"></div>
            </div>
          </Heading>

          <div className="experties">
            <div className="experties-item">
              <p className="name">Web Designing.</p>
              <span className="text">HTML/CSS</span>
            </div>

            <div className="experties-item">
              <p className="name">Graphic Design.</p>
              <span className="text">UI/UX</span>
            </div>

            <div className="experties-item">
              <p className="name">Web Development.</p>
              <span className="text">WORDPRESS/REACT</span>
            </div>

            <div className="experties-item">
              <p className="name">Application Dev</p>
              <span className="text">ANDROID/IOS /HYBRID</span>
            </div>
          </div>
        </div>
      </ExpertiesSection>

      <ServicesSection id="services">
        <div className="services__content">
          <Heading>
            <div className="title">Services</div>

            <div className="number">
              O3 <div className="line"></div>
            </div>
          </Heading>

          <div className="services">
            {services.map((item, i) => (
              <div className="services-item" key={i}>
                <div className="top">
                  <img src={item.icon} alt="services" />
                </div>

                <p className="title">{item.name}</p>

                <p className="text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </ServicesSection>

      <WorkSection id="mywork">
        <div className="work__content">
          <div className="work__content--top">
            <Heading>
              <h1 className="title">
                Projects<span className="yellow">.</span>
              </h1>
              <div className="number">
                O4 <div className="line"></div>
              </div>

              <div className="links">
                <div className="line"></div>
                <button className="link active">Design.</button>
                <button className="link">Development.</button>
                <button className="link">Marketing.</button>
                <button className="link">Photoshop.</button>
              </div>
            </Heading>

            <div className="buttons">
              <button>View Gallery</button>
            </div>
          </div>

          <div className="work__content--list">
            <a href="http://google.com">
              <img src="/assets/ImageGallery.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets/Image7.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets/ImageGallery.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets/Image7.png" alt="project" />
            </a>
          </div>
        </div>
      </WorkSection>

      <TestimonialSection id="testimonials">
        <Heading left>
          <div className="title">Testimonials</div>
          <div className="number">
            O5 <div className="line"></div>
          </div>
        </Heading>

        <div className="testimonials__content">
          <div className="text1">
            <p>
              What <br />
              My Clients Say <br /> About me
            </p>
          </div>

          <div className="testimonials__content--main">
            <img src="/assets/Icon.png" alt="" className="img" />
            <div className="text">
              <p>
                Having a home based business is a wonderful asset to your life.
                The problem still stands, when it comes time advertise your
                business for a cheap cost. I know you have looked for to answer
                everywhere; I am here to share a few simple creative ways
              </p>
            </div>

            <div className="author">
              <img src="/assets/testiImage.png" alt="client" />
              <p>
                Rashed Kabir
                <br /> <span>Designer</span>
              </p>
            </div>

            <div className="slide-btns">
              <button className="slide-btn">
                <img src="/assets/arrow2.png" alt="" />
              </button>
              <button className="slide-btn">
                <img src="/assets/rightArrow.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </TestimonialSection>

      <ContactSection id="contact">
        <div className="heading">
          <img src="/assets/IconMessage.png" alt="" className="img" />
          <div className="label">CONTACT US</div>
          <div className="text">
            {" "}
            Send me a message, I will be in touch <br /> with you shortly.
          </div>
        </div>

        <form className="form">
          <div className="form__content">
            <div className="form-div">
              <input
                className="mg"
                type="text"
                placeholder="Enter your name*"
              />
              <input type="email" placeholder="Enter your Email Address*" />
            </div>
            <div className="form-div">
              <input type="text" placeholder="Your Subject*" />
            </div>
            <div className="form-div">
              <textarea
                name="message"
                placeholder="Your Message*"
                rows="10"
              ></textarea>
            </div>

            <div className="form-div">
              <button className="btn-submit">Send Message</button>
            </div>
          </div>
        </form>
      </ContactSection>
    </Layout>
  );
}
