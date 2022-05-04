import { CalculatorInputBox, CalculatorInputLabelTime } from "./styles";

import { Form } from "react-bootstrap";

interface CalculatorInputsProps {
  LabelText?: string;
}

export const CalculatorInputTime: React.FC<CalculatorInputsProps> = ({
  LabelText,
}) => {
  return (
    <div>
      <CalculatorInputBox>
        <CalculatorInputLabelTime>{LabelText}</CalculatorInputLabelTime>
        <>
          <Form.Control
            type="timeText"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            style={{ width: "80px" }}
          />
        </>
      </CalculatorInputBox>
    </div>
  );
};
