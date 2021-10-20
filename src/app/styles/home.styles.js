import styled from "styled-components";
import { colors } from "./colors";

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  height: 100%;
  background-position: 92% 50%;
  background-repeat: no-repeat;
  background-size: contain;

  &.hero {
    .hero__content {
      position: relative;
      transform: translate(25%, 38%);
      max-width: 70rem;
      width: 100%;

      .heading {
        h1 {
          font-size: 7rem;
          color: #fff};
          font-weight: 400;
          padding: 2rem 0;

          span{
            &.line{
              border-bottom: 2px solid ${colors.yellow};
            }

            &.yellow{
              color: ${colors.yellow};
            }
          }
        }
      }

      .text {
        p {
          font-size: 2rem;
          line-height: 32px;
          color: ${colors.gray};
        }
      }

      .cta {
        display: flex;
        padding: 2.5rem 0;

        .btn-primary {
          padding: 0.8rem 2.5rem;
          border-radius: 2.5rem;
        }

        .btn-video {
          margin-left: 2rem;
          display: flex;
          align-items: center;
          color: ${colors.gray};

          img {
            padding-left: 1rem;
          }
        }
      }
    }

    @media (max-width: 768px) {
      background-position: 0% 50%;
      .hero__content {
        position: relative;
        transform: translate(0, 38%);
        width: 100%;
        padding: 2rem;

        .heading {
          h1 {
            font-size: 4rem;
            padding: 2rem 0;
          }
        }

        .text {
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

export const WedoSection = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 10rem;

  .wedo__content {
    position: relative;
  }

  .services {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 5rem;

    &-item {
      width: 30rem;
      .name {
        font-size: 2.4rem;
        color: ${colors.blue};
        padding: 1.5rem 0;
      }

      .text {
        font-size: 1.7rem;
        color: ${colors.gray};
      }

      .link {
        position: relative;
        color: ${colors.red};
        font-size: 1.5rem;

        p {
          margin: 2rem 0;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;
  position: relative;
  text-align: ${(props) => (props.left ? "left" : "center")};

  .title {
    color: ${colors.red};
    text-transform: uppercase;
    font-size: 2rem;
  }

  .text {
    font-size: 4rem;
    color: ${colors.blue};
    padding: 1.5rem 0;
  }

  .text2 {
    font-size: 1.3rem;
    color: ${colors.gray};
    padding-top: 1.5rem;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.5rem;
    }

    .text {
      font-size: 2.5rem;
    }
  }
`;

export const AboutSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;

  .about__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .about-img {
      padding-right: 10em;
      img {
        width: 60%;
      }
    }
    &--main {
      position: relative;
      width: 30%;
      top: 2.5rem;

      .text {
        p {
          font-size: 1.8rem;
          line-height: 32px;
          color: ${colors.gray};

          span {
            color: ${colors.blue};
            font-weight: 500;
          }
        }
      }
      .author {
        color: ${colors.blue};
        font-size: 1.5rem;
        padding-top: 2rem;

        span {
          color: ${colors.gray};
          font-weight: 500;
        }
      }

      .more {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: 2rem 0;

        button.btn-primary {
          padding: 1.5rem 2.5rem;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 2rem;
      .about-img {
        display: none;
      }

      &--main {
        width: 100%;
      }

      .more {
        justify-content: flex-start;
      }
    }
  }
`;

export const CompletedSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;

  .stats {
    position: relative;
    max-width: 700px;
    width: 100%;
    min-height: 250px;
    background-position: 50% 50%;
    background-size: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;

    &-item {
      text-align: center;
      margin: 2rem 0;
      .numbers {
        color: ${colors.red};
        font-size: 4rem;
      }
      .name {
        color: ${colors.gray};
        font-size: 2rem;
      }
    }
  }

  .cta {
    position: relative;
    width: 60%;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    border: 1px solid ${colors.gray};
    border-radius: 5px;

    .text {
      p {
        font-size: 2rem;
        padding: 0.5rem 0;
      }
      span {
        font-size: 1.4rem;
        color: ${colors.gray};
      }
    }

    button.btn-primary {
      padding: 1.3rem 4rem;
      border-radius: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .stats {
      position: relative;
      max-width: 100%;
      min-height: 50vh;
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
    }

    .cta {
      position: relative;
      max-width: 100%;
      //  min-height: 50vh;
      display: flex;
      flex-direction: column;
      .text {
        padding: 2rem 0;
      }
    }
  }
`;

export const WorkSection = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 10rem;
  background-position: 100% 50%;
  background-size: no-repeat;
  background-size: contain;
  background-repeat: no-repeat;

  .work__content {
    position: relative;
    width: 100%;

    &--top {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 15rem 0 25rem;
      flex-wrap: wrap;

      .buttons {
        position: relative;
        width: 20rem;

        button {
          padding: 1.4rem 3rem;
          border: 1px solid ${colors.gray};
          border-radius: 5px;
          color: ${colors.blue};
          font-weight: 600;
          font-size: 1.4rem;
          margin: 1.5rem 0;
        }
      }
    }

    &--list {
      position: relative;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding-top: 5rem;

      img {
        width: 95%;
        margin: 1rem 0;
      }
    }

    @media (max-width: 768px) {
      padding: 2rem;
      &--top {
        padding: 0rem;
      }
    }
  }
`;

export const TestimonialSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;
  padding-top: 15rem;

  .about__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .about-img {
      padding-right: 20em;
    }
    &--main {
      position: relative;
      width: 30%;
      top: 2.5rem;

      .text {
        p {
          font-size: 1.8rem;
          line-height: 32px;
          color: ${colors.gray};

          span {
            color: ${colors.blue};
            font-weight: 500;
          }
        }
      }
      .author {
        display: flex;
        align-items: center;
        color: ${colors.blue};
        font-size: 1.5rem;
        padding-top: 2rem;

        img {
          padding-right: 1rem;
        }
        span {
          color: ${colors.gray};
          font-weight: 500;
        }
      }

      .slide-btns {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 3.5rem;

        button {
          padding-right: 1rem;
        }
      }
    }

    @media (max-width: 768px) {
      .about-img {
        display: none;
      }

      &--main {
        width: 80%;
      }
    }
  }
`;

export const BlogSection = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 10rem;

  .wedo__content {
    position: relative;
  }

  .news {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 10rem;

    &-item {
      width: 30rem;
      border: 1px solid ${colors.gray};
      border-radius: 5px;
      padding: 1.8rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 1rem 0;

      .top {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        color: ${colors.blue};
        padding: 1.5rem 0;

        img {
          padding-right: 1rem;
        }
        p {
          padding: 0.5rem 0;
          line-height: 2rem;
        }
        span {
          color: ${colors.gray};
        }
      }

      .title {
        font-size: 2rem;
        color: ${colors.blue};
        padding: 1rem 0;
      }

      .text {
        font-size: 1.5rem;
        color: ${colors.gray};
      }

      .link {
        position: relative;
        color: ${colors.red};
        font-size: 1.5rem;
        opacity: 0;

        img {
          margin-top: 2rem;
        }
      }

      &:hover {
        background-color: ${colors.red};
        border: none;

        .top {
          img {
            display: none;
          }
          p {
            color: #fff;
          }
          span {
            color: #fff;
          }
        }
        .title {
          color: #fff;
        }
        .text {
          opacity: 0;
        }

        .link {
          opacity: 1;
        }
      }
    }
  }
`;
