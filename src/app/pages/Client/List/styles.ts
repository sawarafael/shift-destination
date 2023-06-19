import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding-top: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  margin-bottom: 2rem;

  background-color: #fff;
  padding: 1rem;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  &:before {
    content: "";
    background-image: url(https://cdn-icons-png.flaticon.com/512/8932/8932108.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 80px;
    height: 80px;
    margin-right: 1rem;
  }

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2rem;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  margin-bottom: 2rem;

  background-color: #fff;
  padding: 1rem;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
