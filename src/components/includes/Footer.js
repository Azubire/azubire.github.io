import { Row,Col, Container } from "react-bootstrap";

const Footer = (params) => {
    
    return (
      <Container fluid className="text-center border-top">
        <Row>
          <Col>
            <span>made with love by Peter @copyrights @2022</span>
          </Col>
        </Row>
      </Container>
    );
}

export default Footer;