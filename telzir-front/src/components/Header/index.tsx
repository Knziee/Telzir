import { LogoFont } from "./styles";
import { Navbar, Container } from "react-bootstrap";
import { TelzirLogo } from "../../assets/images/";

export const Header: React.FC = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="dark"
        style={{ borderBottom: "1px solid #C0C0C0" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <LogoFont>
              <img
                alt=""
                src={TelzirLogo}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{" "}
              Telzir
            </LogoFont>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
