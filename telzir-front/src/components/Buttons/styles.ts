import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  border-radius: 10px;
  padding: 4.5px 65px;
  transition: all 0.1s ease-in;
  font-family: "RobotoMedium";
  box-shadow: 0 4px rgb(127, 127, 127, 0.2);
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    box-shadow: 0 4px rgb(127, 127, 127, 0.6);
    transform: translateY(3px);
    filter: brightness(0.8);
  }
`;
