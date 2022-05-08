import styled from "styled-components";

export const WrapperContent = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  @media only screen and (max-width: 412px) {
    margin-left: 13px;
  }
  @media only screen and (max-width: 360px) {
    margin-left: 10px;
  }
`;
