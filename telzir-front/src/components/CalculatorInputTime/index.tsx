import { CalculatorInputBox, CalculatorInputLabelTime } from "./styles";

import { Form } from "react-bootstrap";
import { useState } from "react";

interface CalculatorInputsProps {
  LabelText?: string;
  setForm?: any;
}

export const CalculatorInputTime: React.FC<CalculatorInputsProps> = ({
  LabelText,
  setForm,
}) => {
  return (
    <div>
      <CalculatorInputBox>
        <CalculatorInputLabelTime>{LabelText}</CalculatorInputLabelTime>
        <>
          <Form.Control
            type="string"
            maxLength={4}
            style={{ width: "80px" }}
            onChange={(e) => setForm(e.target.value)}
          />
        </>
      </CalculatorInputBox>
    </div>
  );
};
