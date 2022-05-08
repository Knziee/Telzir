import { Navbar, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { LogoFont } from "./styles";
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
          <Navbar.Brand>
            <motion.div
              animate={{ opacity: [0, 1], x: [-55.5, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <LogoFont>
                <img
                  alt=""
                  src={TelzirLogo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
                Telzir
              </LogoFont>
            </motion.div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
