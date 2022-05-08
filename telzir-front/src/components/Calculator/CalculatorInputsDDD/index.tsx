import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CalculatorInputBox, CalculatorInputLabelDDD } from "./styles";
import { tariffApi } from "../../../services/tariffApi/config";

interface CalculatorInputsProps {
  LabelText?: string;
  setOriginDestiny?: any;
}
export const CalculatorInputsDDD: React.FC<CalculatorInputsProps> = ({
  LabelText,
  setOriginDestiny,
}) => {
  interface DataProps {
    tariffName?: any;
  }

  const [data, setData] = useState<DataProps[]>([]);

  const loadTariff = async () => {
    try {
      const response = await tariffApi.get("/api/tariffs/");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadTariff();
  }, []);

  return (
    <div>
      <CalculatorInputBox>
        <CalculatorInputLabelDDD key={"dbDDDInfo"}>
          {LabelText}
        </CalculatorInputLabelDDD>
        <Form.Select
          onChange={(e) => setOriginDestiny(e.target.value)}
          defaultValue={"default"}
        >
          <option value="Select a Value">Selecione destino e origem</option>
          {data.map((e, i: any) => {
            return (
              <option key={i} value={e.tariffName}>
                {e.tariffName}
              </option>
            );
          })}
        </Form.Select>
      </CalculatorInputBox>
    </div>
  );
};
