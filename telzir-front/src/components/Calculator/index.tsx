import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  DDDBox,
  TimeBox,
  ButtonBox,
  MiddleLineBox,
  MiddleLine,
  CardsBox,
  ContentToAppear,
} from "./styles";
import { tariffApi } from "../../services/tariffApi/config";
import { CalculatorInputsDDD } from "./CalculatorInputsDDD";
import { CalculatorInputTime } from "./CalculatorInputTime";
import { Buttons } from "../Buttons";
import { Cards } from "../Cards";

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

  let callValueAfterOriginDestinyCheck: any = 0;
  let callOriginAfterOriginDestinyCheck: any = "Origem";
  let callDestinyAfterOriginDestinyCheck: any = "Destino";

  const loadTariffInfo = async () => {
    try {
      const response = await tariffApi.get("/api/tariffs/infos");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadTariffInfo();
  }, []);

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

  const showContentAndAlert = () => {
    SetShowContent("hidden");
    alert("Você precisa inserir o tempo da ligação em minutos para simular!");
  };
  const loadCardsVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-5%" },
  };

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
        <motion.div
          animate={showContent === "block" ? "open" : "closed"}
          variants={loadCardsVariants}
          transition={{ duration: 0.5 }}
        >
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
                  key={i}
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
        </motion.div>
      </ContentToAppear>
    </div>
  );
};
