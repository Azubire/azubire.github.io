import {Container, Row, Col, Card} from 'react-bootstrap';
import profile from '../../assets/img/doctors-cuate.svg'

const About = () => {

    return (
      <Container>
        <Row>
          <Col className="col-md-4 col-12 text-center">
            <h1 className="">About Me</h1>
            <p>Hello there!, I'm Azubire Peter</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-4">
            <Card className='border-0 shadow-none'>
                <img src={profile} alt="" className="img-circle mt-3" />
              <Card.Body>
                <Card.Text className='text-dark text-center'>This guy right here is the juice</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-8 col-12 pt-5 pt-md-0">
            <h1>Bio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              modi inventore ipsum. Quas explicabo ratione consectetur? Tenetur
              cum quo labore at, explicabo aliquid dignissimos. Esse provident
              voluptas dolorum magni a?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              modi inventore ipsum. Quas explicabo ratione consectetur? Tenetur
              cum quo labore at, explicabo aliquid dignissimos. Esse provident
              voluptas dolorum magni a?
            </p>
          </Col>
        </Row>
      </Container>
    );
}

export default About;