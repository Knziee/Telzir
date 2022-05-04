import { PageTextBox, PageTitle, PageSubTitle } from "./styles";

export const TitleText: React.FC = () => {
  return (
    <div>
      <PageTextBox>
        <PageTitle>Fale mais</PageTitle>
        <PageSubTitle>
          Nosso plano para você falar mais, pagando menos Simule o valor da sua
          ligaçãoe se surpreenda
        </PageSubTitle>
      </PageTextBox>
    </div>
  );
};
