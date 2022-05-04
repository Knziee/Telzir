import { CalculatorInputBox, CalculatorInputLabelDDD } from "./styles";

import { Form } from "react-bootstrap";

interface CalculatorInputsProps {
  LabelText?: string;
  FormValueDDD1?: string;
  FormValueDDD2?: string;
  FormValueDDD3?: string;
  FormValueDDD4?: string;
}

export const CalculatorInputsDDD: React.FC<CalculatorInputsProps> = ({
  LabelText,
  FormValueDDD1,
  FormValueDDD2,
  FormValueDDD3,
  FormValueDDD4,
}) => {
  return (
    <div>
      <CalculatorInputBox>
        <CalculatorInputLabelDDD>{LabelText}</CalculatorInputLabelDDD>
        <Form.Select style={{ backgroundColor: "#E7E7E7" }}>
          <option value={FormValueDDD1}>{FormValueDDD1}</option>
          <option value={FormValueDDD2}>{FormValueDDD2}</option>
          <option value={FormValueDDD3}>{FormValueDDD3}</option>
          <option value={FormValueDDD4}>{FormValueDDD4}</option>
        </Form.Select>
      </CalculatorInputBox>
    </div>
  );
};
