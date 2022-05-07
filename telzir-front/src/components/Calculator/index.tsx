import {
  DDDBox,
  TimeBox,
  ButtonBox,
  MiddleLineBox,
  MiddleLine,
  CardsBox,
  ContentToAppear,
} from "./styles";
import { CalculatorInputsDDD } from "../CalculatorInputsDDD";
import { CalculatorInputTime } from "../CalculatorInputTime";
import { Buttons } from "../Buttons";
import { Cards } from "../Cards";
import { useEffect, useState } from "react";
import { tariffApi } from "../../services/tariffApi/config";

export const Calculator: React.FC = () => {
  interface DataProps {
    origin?: any;
    tariffName?: any;
    data?: any;
    TariffInfoId?: any;
    destiny?: any;
    valuePerMinute?: any;
    tariff_info?: any;
  }
  const [form, setForm]: any = useState("00");
  const [originDestiny, setOriginDestiny] = useState();
  const [showContent, SetShowContent] = useState("");

  const [data, setData]: any = useState<DataProps>();
  const loadTariffInfo = async () => {
    try {
      const response = await tariffApi.get("/api/tariffs/infos");
      setData(response.data);
      console.log(data[0].origin);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadTariffInfo();
  }, []);

  let callValueAfterOriginDestinyCheck: any = 0;
  let callOriginAfterOriginDestinyCheck: any = 0;
  let callDestinyAfterOriginDestinyCheck: any = 0;

  if (originDestiny === "De 011 para 016") {
    callValueAfterOriginDestinyCheck = data[0].valuePerMinute;
    callOriginAfterOriginDestinyCheck = data[0].origin;
    callDestinyAfterOriginDestinyCheck = data[0].destiny;
  }
  if (originDestiny === "De 016 para 011") {
    callValueAfterOriginDestinyCheck = data[1].valuePerMinute;
    callOriginAfterOriginDestinyCheck = data[1].origin;
    callDestinyAfterOriginDestinyCheck = data[1].destiny;
  }
  if (originDestiny === "De 011 para 017") {
    callValueAfterOriginDestinyCheck = data[2].valuePerMinute;
    callOriginAfterOriginDestinyCheck = data[2].origin;
    callDestinyAfterOriginDestinyCheck = data[2].destiny;
  }
  if (originDestiny === "De 017 para 011") {
    callValueAfterOriginDestinyCheck = data[3].valuePerMinute;
    callOriginAfterOriginDestinyCheck = data[3].origin;
    callDestinyAfterOriginDestinyCheck = data[3].destiny;
  }
  if (originDestiny === "De 011 para 018") {
    callValueAfterOriginDestinyCheck = data[4].valuePerMinute;
    callOriginAfterOriginDestinyCheck = data[4].origin;
    callDestinyAfterOriginDestinyCheck = data[4].destiny;
  }
  if (originDestiny === "De 018 para 011") {
    callValueAfterOriginDestinyCheck = data[5].valuePerMinute;
    callOriginAfterOriginDestinyCheck = data[5].origin;
    callDestinyAfterOriginDestinyCheck = data[5].destiny;
  }
  const planCard: any = [
    {
      planName: "Sem FaleMais",
      planTime: " ",
      callOrigin: callOriginAfterOriginDestinyCheck,
      callDestiny: callDestinyAfterOriginDestinyCheck,
      planTimeMin: " :(",
      callValue: callValueAfterOriginDestinyCheck,
    },
    {
      planName: "Com FaleMais ",
      planTime: 30,
      callOrigin: callOriginAfterOriginDestinyCheck,
      callDestiny: callDestinyAfterOriginDestinyCheck,
      planTimeMin: "min",
      callValue: callValueAfterOriginDestinyCheck,
    },
    {
      planName: "Com FaleMais",
      planTime: 60,
      callOrigin: callOriginAfterOriginDestinyCheck,
      callDestiny: callDestinyAfterOriginDestinyCheck,
      planTimeMin: "min",
      callValue: callValueAfterOriginDestinyCheck,
    },
    {
      planName: "Com FaleMais",
      planTime: 120,
      callOrigin: callOriginAfterOriginDestinyCheck,
      callDestiny: callDestinyAfterOriginDestinyCheck,
      planTimeMin: "min",
      callValue: callValueAfterOriginDestinyCheck,
    },
  ];
  function showContentAndAlert() {
    SetShowContent("hidden");
    alert("Você precisa inserir o tempo da ligação em minutos para simular!");
  }
  return (
    <div>
      <DDDBox>
        <CalculatorInputsDDD
          LabelText="Origem e Destino "
          setOriginDestiny={setOriginDestiny}
        ></CalculatorInputsDDD>
      </DDDBox>
      <TimeBox>
        <CalculatorInputTime
          LabelText="Insira o tempo da ligação em minutos"
          setForm={setForm}
        ></CalculatorInputTime>
      </TimeBox>
      <ButtonBox
        onClick={() => {
          form !== "00" ? SetShowContent("block") : showContentAndAlert();
        }}
      >
        <Buttons ButtonThemeBackground="#2E718E" ButtonText="Simular" />
      </ButtonBox>
      <ContentToAppear style={{ display: `${showContent}` }}>
        <MiddleLineBox>
          <MiddleLine />
        </MiddleLineBox>
        <CardsBox>
          {planCard.map((planCard: any, i: number) => {
            const planValueCalculation =
              (form - planCard.planTime) * planCard.callValue < 0
                ? 0
                : (form - planCard.planTime) *
                  (planCard.planName !== "Sem FaleMais"
                    ? planCard.callValue * 1.1
                    : planCard.callValue);

            return (
              <Cards
                CardTitleText1={planCard.planName}
                CardTitleMinutesText={
                  planCard.planTime + `${planCard.planTimeMin}`
                }
                CardTextLocations={
                  planCard.callOrigin + "  >  " + planCard.callDestiny
                }
                CardTextSubTitleTime="Tempo de ligação : "
                CardTextMinutes={form + " Min"}
                CardTextSubTitleMoney="Voce gastaria:"
                CardTextMoney={planValueCalculation.toFixed(2) + " R$"}
              />
            );
          })}
        </CardsBox>
      </ContentToAppear>
    </div>
  );
};
