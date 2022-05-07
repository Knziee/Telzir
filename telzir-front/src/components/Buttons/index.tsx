import { Button } from "./styles";
interface ButtonsProps {
  ButtonThemeBackground?: string;
  ButtonText: string;
}

export const Buttons: React.FC<ButtonsProps> = ({
  ButtonThemeBackground,
  ButtonText,
}) => {
  return (
    <Button style={{ backgroundColor: `${ButtonThemeBackground} ` }}>
      {ButtonText}
    </Button>
  );
};
