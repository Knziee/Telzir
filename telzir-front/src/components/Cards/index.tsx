import {
  CardBackground,
  CardTitle,
  CardTitleMinutes,
  CardLocations,
  CardSubTitle,
  CardMinutesAndMoney,
  ButtonCardBox,
} from "./styles";

import { Buttons } from "../Buttons";

interface CardsProps {
  CardTitleText1?: string;
  CardTitleText2?: string;
  CardTitleMinutesText?: string;
  CardTextLocations?: string;
  CardTextSubTitleTime?: string;
  CardTextMinutes?: string;
  CardTextSubTitleMoney?: string;
  CardTextMoney?: string;
}

export const Cards: React.FC<CardsProps> = ({
  CardTitleText1,
  CardTitleMinutesText,
  CardTextLocations,
  CardTextSubTitleTime,
  CardTextMinutes,
  CardTextSubTitleMoney,
  CardTextMoney,
  CardTitleText2,
}) => {
  return (
    <CardBackground>
      <CardTitle>{CardTitleText1}</CardTitle>
      <CardTitle>{CardTitleText2}</CardTitle>
      <CardTitleMinutes>{CardTitleMinutesText}</CardTitleMinutes>
      <CardLocations>{CardTextLocations}</CardLocations>
      <CardSubTitle>{CardTextSubTitleTime}</CardSubTitle>
      <CardMinutesAndMoney>{CardTextMinutes}</CardMinutesAndMoney>
      <CardSubTitle>{CardTextSubTitleMoney}</CardSubTitle>
      <CardMinutesAndMoney>{CardTextMoney}</CardMinutesAndMoney>
      <ButtonCardBox>
        <Buttons ButtonThemeBackground="#7B1779" />
      </ButtonCardBox>
    </CardBackground>
  );
};
