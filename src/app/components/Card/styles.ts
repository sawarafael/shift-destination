import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;

  text-align: center;
  font-family: "Roboto", sans-serif;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease;
    transform: scale(1.1);
    border: 1px solid #fff;

    color: #fff;
  }

  div {
    flex: 1;
  }
`;

export const Title = styled.h3``;

export const Description = styled.p``;

export const Icon = styled.div``;
