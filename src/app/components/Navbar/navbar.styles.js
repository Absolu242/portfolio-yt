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

    li {
      padding: 0 3rem;

      a.link {
        font-size: 1.5rem;

        &:hover {
          border-bottom: 2px solid ${colors.yellow};
        }
      }

      &.social {
        a {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid ${colors.gray};
        }
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    padding: 0 2rem;

    .logo {
      img {
        width: 50%;
      }
    }
    .menu {
      display: block;
    }

    ul {
      position: absolute;
      display: block;
      width: 100%;
      transform: translateY(${(props) => (props.active ? "10rem" : "-20rem")});
      transition: all 0.3s ease;
      z-index: 9999;
      background-color: #fff;

      li {
        padding: 1rem 0rem;

        a {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
