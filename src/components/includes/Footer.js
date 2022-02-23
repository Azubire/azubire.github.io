import { Row,Col, Container } from "react-bootstrap";



const Footer = (params) => {
    
    return (
      <Container fluid className="text-center border-top">
        <Row>
          <Col>
            <span>Made with love by Peter @2022</span>
          </Col>
        </Row>
      </Container>
    );
}

export default Footer;