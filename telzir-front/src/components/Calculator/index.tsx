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
import { useEffect, useState } from "react";
import { tariffApi } from "../../services/tariffApi/config";

export const Calculator: React.FC = () => {
  interface DataProps {
    destiny?: any;
  }
  const [data, setData] = useState<DataProps[]>([]);
  const load = async () => {
    try {
      const response = await tariffApi.get("/api/tariffs/infos");
      setData(response.data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    load();
  }, []);

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
        <Buttons ButtonThemeBackground="#2E718E" />
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
          CardTextLocations=""
          CardTextSubTitleTime="Tempo de ligação : "
          CardTextMinutes="xx Min"
          CardTextSubTitleMoney="Voce gastaria:"
          CardTextMoney="xx R$"
        />
      </CardsBox>
    </div>
  );
};
