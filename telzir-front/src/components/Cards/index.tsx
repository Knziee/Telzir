import { motion } from "framer-motion";
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
  CardTitleMinutesText?: any;
  CardTextLocations?: string;
  CardTextSubTitleTime?: string;
  CardTextMinutes?: any;
  CardTextSubTitleMoney?: string;
  CardTextMoney?: any;
}
export const Cards: React.FC<CardsProps> = ({
  CardTitleText1,
  CardTitleMinutesText,
  CardTextLocations,
  CardTextSubTitleTime,
  CardTextMinutes,
  CardTextSubTitleMoney,
  CardTextMoney,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
      <CardBackground>
        <CardTitle>{CardTitleText1}</CardTitle>
        <CardTitleMinutes>{CardTitleMinutesText}</CardTitleMinutes>
        <CardLocations>{CardTextLocations}</CardLocations>
        <CardSubTitle>{CardTextSubTitleTime}</CardSubTitle>
        <CardMinutesAndMoney>{CardTextMinutes}</CardMinutesAndMoney>
        <CardSubTitle>{CardTextSubTitleMoney}</CardSubTitle>
        <CardMinutesAndMoney>{CardTextMoney}</CardMinutesAndMoney>
        <ButtonCardBox>
          <Buttons ButtonThemeBackground="#7B1779" ButtonText="Assinar" />
        </ButtonCardBox>
      </CardBackground>
    </motion.div>
  );
};
