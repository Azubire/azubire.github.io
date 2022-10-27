import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";

const Header = ({setIsDarkMode,isDarkMode}) => {

    return (
      <>
        <Container
          fluid
          className={`shadow-sm sticky-top py-2 header-top ${
            isDarkMode ? "bg-dark" : "bg-light"
          }`}
        >
          <Row>
            <Col>
              <NavBar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Header;