import styled from "styled-components";

export const DDDBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
  img {
    padding-top: 40px;
    margin-left: 20px;
  }
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const MiddleLineBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const MiddleLine = styled.div`
  border-bottom: 3px solid #c4c4c4;
  width: 600px;
  border-radius: 15px;
  @media only screen and (max-width: 1024px) {
    width: 60%;
  }
`;

export const CardsBox = styled.div`
  margin-top: 44px;
  width: 970px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContentToAppear = styled.div`
  display: none;
`;
