import { WrapperContent } from "./styles";
import { Header } from "../../components/Header";
import { TitleText } from "../../components/TitleText";
import { Calculator } from "../../components/Calculator";
import { motion } from "framer-motion";

export const FaleMais: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <motion.div
        animate={{
          x: [-35.0, -5.0],
          opacity: [0.0, 1.0],
        }}
        transition={{ duration: 0.5 }}
      >
        <WrapperContent>
          <TitleText />
          <Calculator />
        </WrapperContent>
      </motion.div>
    </div>
  );
};
