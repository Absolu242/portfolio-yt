import React from "react";
import Layout from "../components/Layout";
import {
  AboutSection,
  BlogSection,
  CompletedSection,
  Heading,
  HeroSection,
  TestimonialSection,
  WedoSection,
  WorkSection,
} from "../styles/home.styles";

const services = [
  {
    icon: "/assets1/Icon1.png",
    name: "Strategy & Research",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
  {
    icon: "/assets1/Icon2.png",
    name: "Design & Development",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt doloribus perspiciatis natus eveniet nesciunt facere.",
  },
  {
    icon: "/assets1/Icon3.png",
    name: "Management & Marketing",
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
              Web & Mobile <br /> Developer
              <span className="yellow">.</span>
            </h1>
          </div>
        </div>
      </HeroSection>

      <WedoSection>
        <div className="wedo__content">
          <Heading
            style={{
              backgroundImage: `url(/assets1/bgShape.png)`,
            }}
          >
            <div className="title">What we do</div>
            <div className="text">
              The Things motivates me is common <br /> form of motivation.
            </div>
          </Heading>

          <div className="services">
            {services.map((item, i) => (
              <div className="services-item" key={i}>
                <img src={item.icon} alt="icon" />
                <p className="name">{item.name}</p>
                <p className="text">{item.text}</p>
                <a href="https://google.com" className="link">
                  <p>More About {item.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </WedoSection>

      <AboutSection
        style={{
          backgroundImage: `url(/assets1/Group.png)`,
        }}
      >
        <div className="about__content">
          <img className="about-img" src="/assets1/ceo.png" alt="ceo" />

          <div className="about__content--main">
            <Heading left>
              <div className="title">About us</div>
              <div className="text">
                Leading digital agency <br /> for business solution
              </div>
            </Heading>

            <div className="text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium commodi tempora doloribus, quo esse porro, quas
                nobis autem enim, voluptas id nisi beatae facere! Totam?
                <br />
                <br />
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam ipsum excepturi tempore. Dicta, hic molestias.
                </span>
              </p>
            </div>

            <div className="author">
              <p>
                Rashed Kabir, <span>CEO CreativeGigs</span>
              </p>
            </div>

            <div className="more">
              <button className="btn-primary">Learn More ></button>
            </div>
          </div>
        </div>
      </AboutSection>

      <CompletedSection>
        <Heading>
          <div className="text">
            We completed 1500+ Projects Yearly <br />
            successfully & counting
          </div>
        </Heading>

        <div
          className="stats"
          style={{
            backgroundImage: `url(/assets1/ctaBg.png)`,
          }}
        >
          <div className="stats-item">
            <p className="numbers">16K</p>
            <p className="name">Global Customer</p>
          </div>
          <div className="stats-item">
            <p className="numbers">1500+</p>
            <p className="name">Completed Projects</p>
          </div>
          <div className="stats-item">
            <p className="numbers">460+</p>
            <p className="name">Experrs Worker</p>
          </div>
        </div>
        <div className="cta">
          <div className="text">
            <p>Have any question ?</p>
            <span>Don't hesitate to contact us</span>
          </div>

          <button className="btn-primary">Contact us</button>
        </div>
      </CompletedSection>

      <WorkSection
        style={{
          backgroundImage: `url(/assets1/WorkGallery.png)`,
        }}
      >
        <div className="work__content">
          <div className="work__content--top">
            <Heading left>
              <div className="text">
                Check some of our <br /> Recent Work
              </div>
              <p className="text2">
                {" "}
                Click the button on the side to check all of our work
              </p>
            </Heading>

            <div className="buttons">
              <button>View Gallery</button>
            </div>
          </div>

          <div className="work__content--list">
            <a href="http://google.com">
              <img src="/assets1/work1.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets1/work2.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets1/work3.png" alt="project" />
            </a>
            <a href="http://google.com">
              <img src="/assets1/work4.png" alt="project" />
            </a>
          </div>
        </div>
      </WorkSection>

      <TestimonialSection
        style={{
          backgroundImage: `url(/assets1/reviewbg.png)`,
        }}
      >
        <div className="about__content">
          <img
            className="about-img"
            src="/assets1/ClientImage.png"
            alt="clients"
          />

          <div className="about__content--main">
            <Heading left>
              <div className="title">Testimonials</div>
              <div className="text">
                Check what's our client <br /> say about us!
              </div>
            </Heading>

            <div className="text">
              <p>
                Having a home based business is a wonderful asset to your life.
                The problem still stands, when it comes time advertise your
                business for a cheap cost. I know you have looked for to answer
                everywhere; I am here to share a few simple creative ways
              </p>
            </div>

            <div className="author">
              <img src="/assets1/testiImage.png" alt="client" />
              <p>
                Rashed Kabir
                <br /> <span>Designer</span>
              </p>
            </div>

            <div className="slide-btns">
              <button className="slide-btn">
                <img src="/assets1/Iconarrowback.png" alt="" />
              </button>
              <button className="slide-btn">
                <img src="/assets1/Iconarrownext.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </TestimonialSection>

      <BlogSection>
        <div className="wedo__content">
          <Heading
            style={{
              backgroundImage: `url(/assets1/bgShape.png)`,
            }}
          >
            <div className="title">our Blog</div>
            <div className="text">Our Company News</div>
          </Heading>

          <div className="news">
            <div className="news-item">
              <div className="top">
                <img src="/assets1/newsimg.png" alt="news" />
                <p>
                  Jannatul Ferdus <br />
                  <span>06 Aug 2018</span>
                </p>
              </div>

              <p className="title">Internet advertising what went wrong</p>

              <p className="text">
                Having a home based business is a wonderful asset to your life.
                The problem still stands, when it comes time advertise
              </p>

              <a href="http://google.com" className="link">
                <img src="/assets1/Iconarrownext.png" alt="" />
              </a>
            </div>
            <div className="news-item">
              <div className="top">
                <img src="/assets1/newsimg.png" alt="news" />
                <p>
                  Jannatul Ferdus <br />
                  <span>06 Aug 2018</span>
                </p>
              </div>

              <p className="title">Internet advertising what went wrong</p>

              <p className="text">
                Having a home based business is a wonderful asset to your life.
                The problem still stands, when it comes time advertise
              </p>

              <a href="http://google.com" className="link">
                <img src="/assets1/Iconarrownext.png" alt="" />
              </a>
            </div>
            <div className="news-item">
              <div className="top">
                <img src="/assets1/newsimg.png" alt="news" />
                <p>
                  Jannatul Ferdus <br />
                  <span>06 Aug 2018</span>
                </p>
              </div>

              <p className="title">Internet advertising what went wrong</p>

              <p className="text">
                Having a home based business is a wonderful asset to your life.
                The problem still stands, when it comes time advertise
              </p>

              <a href="http://google.com" className="link">
                <img src="/assets1/Iconarrownext.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </BlogSection>
    </Layout>
  );
}
