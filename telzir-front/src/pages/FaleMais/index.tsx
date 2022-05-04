import { WrapperContent } from "./styles";
import { Header } from "../../components/Header";
import { TitleText } from "../../components/TitleText";
import { Calculator } from "../../components/Calculator";

export const FaleMais: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <WrapperContent>
        <TitleText />
        <Calculator />
      </WrapperContent>
    </div>
  );
};
