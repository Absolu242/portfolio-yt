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

  .hero__content {
    position: relative;
    transform: translate(25%, 38%);
    max-width: 70rem;
    width: 100%;

    .heading {
      h1 {
        font-size: 7rem;
        color: #fff;
        font-weight: 400;
        padding: 2rem 0;

        span {
          &.line {
            border-bottom: 2px solid ${colors.yellow};
          }

          &.yellow {
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

  @media (max-width: 765px) {
    background-position: 30% 60%;
    .hero__content {
      position: relative;
      transform: translate(0, 20%);
      max-width: 100%;
      min-height: 100vh;
      padding: 2rem;
      width: 100%;

      .heading {
        h1 {
          font-size: 5rem;
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
`;

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: left;

  .title {
    color: #fff;
    font-size: 10rem;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;

    .yellow {
      color: ${colors.yellow};
    }
    &::first-letter {
      text-shadow: 1px -1px ${colors.yellow};
      color: ${colors.blue};
      font-size: 200px;
      font-weight: 400;
    }
  }

  .number {
    position: absolute;
    top: 10rem;
    right: 0;
    font-family: "Work Sans", sans-serif;
    font-size: 10rem;
    color: ${colors.gray};
    font-weight: 400;
    opacity: 0.3;
    right: 5rem;

    .line {
      position: absolute;
      right: -5rem;
      top: 6rem;
      width: 5rem;
      height: 1px;
      background-color: ${colors.yellow};
      opacity: 1 !important;
    }
  }

  .links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    .line {
      width: 10rem;
      height: 1px;
      background-color: ${colors.yellow};
      margin-right: 1rem;
    }
    .link {
      font-size: 1.5rem;
      color: #fff;
      padding: 0 1.8rem;
      font-family: "Work Sans", sans-serif;

      &:hover,
      &.active {
        color: ${colors.yellow};
      }
    }

    @media (max-width: 765px) {
      .line {
        display: none;
      }
      justify-content: center;
      .link {
        margin: 1rem 0;
      }
    }
  }

  .text {
    font-size: 1.5rem;
    color: #fff;
  }

  .text2 {
    font-size: 1.3rem;
    color: ${colors.gray};
    padding-top: 1.5rem;
  }

  @media (max-width: 765px) {
    .title {
      font-size: 2.5rem;

      &::first-letter {
        text-shadow: 1px -1px ${colors.yellow};
        color: ${colors.blue};
        font-size: 100px;
        font-weight: 400;
      }
    }

    .number {
      top: 4.8rem;
      font-size: 5rem;

      .line {
        right: -3rem;
        top: 3rem;
        width: 5rem;
        z-index: -1;
      }
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
  padding: 0 2rem;

  .about__content {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;

    .about-img {
      position: relative;
      padding-right: 2rem;
      max-width: 300px;
      border-radius: 5px;
    }

    &--main {
      position: relative;
      width: 40%;

      .text {
        margin-top: 4rem;
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

      .more {
        display: flex;
        margin: 2rem 0;

        button {
          padding: 1.3rem 2.8rem;
          margin-right: 2rem;
          &.btn-cv {
            color: ${colors.yellow};
            border: 1px solid ${colors.yellow};

            &:hover {
              background-color: ${colors.yellow};
              color: #fff;
            }
          }

          &.btn-hire {
            color: #fff;
            border: 1px solid ${colors.gray};

            &:hover {
              background-color: #fff;
              color: ${colors.gray};
            }
          }
        }
      }
    }

    @media (max-width: 765px) {
      padding: 2rem;
      .about-img {
        display: none;
      }

      &--main {
        width: 100%;
      }
    }
  }
`;

export const ExpertiesSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  min-height: 70vh;
  height: 100%;
  padding: 0 2rem;
  padding-top: 10rem;

  .experties__content {
    position: relative;
  }

  .experties {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 5rem;

    &-item {
      width: 30rem;
      padding: 1rem 0;
      padding-left: 1.5rem;
      .name {
        font-size: 2rem;
        color: #fff;
        padding: 1.5rem 0;
      }

      .text {
        font-size: 1.2rem;
        color: ${colors.yellow};
      }
    }
  }
`;

export const ServicesSection = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 0 2rem;
  padding-top: 10rem;

  .services__content {
    position: relative;
  }

  .services {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10rem;

    &-item {
      justify-self: center;
      width: 420px;
      height: 320px;
      border: 1px solid #202245;
      padding: 5rem 4.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 2rem;
      background-color: #202245;

      .top {
        img {
          width: 70px;
        }
      }

      .title {
        font-size: 2.8rem;
        color: #fff;
        padding: 1.5rem 0;
      }

      .text {
        font-size: 1.7rem;
        color: #fff;
        text-align: left;
        opacity: 0.5;
      }

      &:hover {
        border: 1px solid ${colors.yellow};
        background-color: none;

        .title {
          color: ${colors.yellow};
        }
      }
    }

    @media (max-width: 765px) {
      &-item {
        .top {
          img {
            width: 50px;
          }
        }

        .title {
          font-size: 2rem;
          padding: 1.5rem 0;
        }

        .text {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const WorkSection = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 0 2rem;
  padding-top: 10rem;

  .work__content {
    position: relative;
    width: 100%;

    &--top {
      position: relative;
      width: 100%;
      flex-wrap: wrap;

      .buttons {
        position: relative;
        width: 20rem;

        button {
          padding: 1.4rem 3rem;
          background-color: ${colors.yellow};
          color: #fff;
          font-size: 1.4rem;
          margin: 1.5rem 0;
        }
      }
    }

    &--list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      padding-top: 5rem;

      img {
        width: 255px;
        margin: 1rem;
      }
    }

    @media (max-width: 765px) {
      padding: 2rem;
      &--top {
        padding: 0rem;
      }
      &--list {
        justify-content: center;
      }
    }
  }
`;

export const TestimonialSection = styled.div`
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 0 2rem;
  padding-top: 15rem;

  .testimonials__content {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    top: 5.5rem;

    .text1 {
      position: relative;
      left: -5rem;
      font-size: 3.5rem;
      text-decoration: underline;
      color: #fff;
    }

    &--main {
      position: relative;
      width: 50%;

      .img {
        position: absolute;
        width: 80px;
        top: -3.5rem;
      }

      .text {
        p {
          font-size: 1.8rem;
          line-height: 32px;
          color: #fff;

          span {
            color: ${colors.blue};
            font-weight: 500;
          }
        }
      }
      .author {
        display: flex;
        align-items: center;
        color: #fff;
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

    @media (max-width: 765px) {
      .text1 {
        display: none;
      }

      &--main {
        width: 100%;
      }
    }
  }
`;

export const ContactSection = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  padding: 0 2rem;
  padding-top: 15rem;
  text-align: center;

  .heading {
    position: relative;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;

    .img {
      position: absolute;
      left: 38%;
      top: -35%;
    }

    .label {
      color: ${colors.yellow};
      font-size: 2rem;
      padding: 2rem 0;
    }
    .text {
      font-size: 3.5rem;
      color: #fff;
    }
  }

  .form {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    &__content {
      max-width: 55%;
      width: 100%;
      padding: 3rem 0;
    }

    &-div {
      position: relative;
      width: 100%;
      display: flex;
      padding: 5rem 0;

      input,
      textarea {
        border: none;
        border-bottom: 1px solid ${colors.gray};
        padding: 1rem 0;
        width: 100%;
        background: none;
        outline: none;

        &.mg {
          margin-right: 5rem;
        }
      }

      .btn-submit {
        position: relative;
        justify-self: flex-end;
        padding: 1.2rem 2.5rem;
        color: ${colors.yellow};
        border: 1px solid ${colors.yellow};

        &:hover {
          background-color: ${colors.yellow};
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 765px) {
    .heading {
      .img {
        position: absolute;
        left: 9%;
        top: -30%;
      }
      .label {
        color: ${colors.yellow};
        font-size: 1.5rem;
      }
      .text {
        font-size: 2rem;
      }
    }

    .form {
      &__content {
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;
