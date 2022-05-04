import styled from "styled-components";

export const Button = styled.button`
  /* background-color: ${(props: any) =>
    props.CalculatorButton ? "#2E718E" : "#7B1779"}; */
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  border-radius: 10px;
  padding: 4.5px 55px;
  transition: all 0.1s ease-in;

  &:hover {
  }

  &:active {
    background-color: black;
  }
`;
