import { Button } from "./styles";
interface ButtonsProps {
  ButtonThemeBackground?: string;
}

export const Buttons: React.FC<ButtonsProps> = ({ ButtonThemeBackground }) => {
  return (
    <Button style={{ backgroundColor: `${ ButtonThemeBackground } ` }}>
      Botaozada
    </Button>
  );
};
