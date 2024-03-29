import styled from "styled-components";

export const PageTextBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: 100px;
  max-width: 460px;
  @media only screen and (max-width: 360px) {
    margin-top: 50px;
    max-width: 360px;
  }
`;

export const PageTitle = styled.div`
  font-size: 38px;
  font-family: "RobotoBold";
`;

export const PageSubTitle = styled.div`
  font-size: 20px;
`;
