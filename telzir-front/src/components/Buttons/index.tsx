import { Button } from "./styles";
interface ButtonsProps {
  ButtonTheme?: string;
}

export const Buttons: React.FC<ButtonsProps> = ({ ButtonTheme }) => {
  return <Button ButtonTheme>Botaozada</Button>;
};
