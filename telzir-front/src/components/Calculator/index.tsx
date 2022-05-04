import {
  DDDBox,
  TimeBox,
  ButtonBox,
  MiddleLineBox,
  MiddleLine,
  CardsBox,
} from "./styles";
import { CalculatorInputsDDD } from "../CalculatorInputsDDD";
import { ArrowIcon } from "../../assets/images";
import { CalculatorInputTime } from "../CalculatorInputTime";
import { Buttons } from "../Buttons";
import { Cards } from "../Cards";

export const Calculator: React.FC = () => {
  return (
    <div>
      <DDDBox>
        <CalculatorInputsDDD
          LabelText="Origem"
          FormValueDDD1="011"
          FormValueDDD2=""
          FormValueDDD3=""
          FormValueDDD4=""
        ></CalculatorInputsDDD>
        <img src={ArrowIcon} alt="" />
        <CalculatorInputsDDD
          LabelText="Destino"
          FormValueDDD1="016"
          FormValueDDD2=""
          FormValueDDD3=""
          FormValueDDD4=""
        ></CalculatorInputsDDD>
      </DDDBox>
      <TimeBox>
        <CalculatorInputTime LabelText="Tempo de ligação"></CalculatorInputTime>
      </TimeBox>
      <ButtonBox>
        <Buttons ButtonTheme="CalculatorButton" />
      </ButtonBox>
      <MiddleLineBox>
        <MiddleLine />
      </MiddleLineBox>
      <CardsBox>
        <Cards
          CardTitleText1="Com 
        FaleMais"
          CardTitleText2=""
          CardTitleMinutesText="30min"
          CardTextLocations="xx > xx"
          CardTextSubTitleTime="Tempo de ligação : "
          CardTextMinutes="xx Min"
          CardTextSubTitleMoney="Voce gastaria:"
          CardTextMoney="xx R$"
        />
      </CardsBox>
    </div>
  );
};
