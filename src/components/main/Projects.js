import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Projects = ({ projects }) => {
  return (
    <Container>
      <Row>
        <h1 className="text-center py-5">Recent Projects</h1>
        {projects.map((project) => {
          const { id, name, color, img, stack } = project;

          return (
            <Col key={id} className="col-lg-6 col-md-6 col-12 g-1 h-100">
              <Link to={`/project-details/${id}`} className="nav-link h-100">
                <Card className="hover-zoom">
                  <CardHeader className={`text-center bg-${color}`}>
                    {name}
                  </CardHeader>
                  <CardImg
                    src={img}
                    alt={name}
                    className="img-project py-1"
                  ></CardImg>
                  <Card.Body className="row justify-content-start">
                    {stack.map((item, index) => {
                      const { icon } = item;
                      return (
                        <ul key={index} className="list-unstyled col-3 ">
                          <li className="">{icon}</li>
                        </ul>
                      );
                    })}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
