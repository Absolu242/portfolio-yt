import styled from "styled-components";
import { colors } from "../../styles/colors";

export const NavContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const NavItems = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;

  .logo {
    position: relative;
    font-size: 3rem;
    color: ${colors.yellow};
  }

  .menu {
    display: none;
  }

  ul {
    display: flex;
    list-style-type: none;
    align-items: center;

    li {
      padding: 0 3rem;

      a.link {
        font-size: 1.5rem;

        &:hover {
          border-bottom: 2px solid ${colors.yellow};
        }
      }

      &.social {
        button {
          width: 45px;
          height: 45px;
          background-color: #282a4f;
          border-radius: 50%;
          margin-right: 1rem;

          &:hover {
            background-color: ${colors.yellow};
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    padding: 0;

    .logo {
      padding: 0 2rem;
      img {
        width: 50%;
      }
    }
    .menu {
      display: block;

      padding: 0 2rem;
    }

    ul {
      position: absolute;
      display: block;
      width: 100%;
      transform: translateY(${(props) => (props.active ? "15rem" : "-20rem")});
      transition: all 0.3s ease;
      z-index: 9999;
      background-color: #fff;
      padding: 0 2rem;

      li {
        padding: 1rem 0rem;

        a {
          font-size: 1.5rem;
          color: ${colors.gray};
        }

        &.social {
          button {
            width: 35px;
            height: 35px;

            img {
              width: 15px;
            }
          }
        }
      }
    }
  }
`;
