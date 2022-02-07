import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Mic } from "react-bootstrap-icons";

export default function Sermons() {
  return (
    <>
      <Row>
        <Col className="text-center text-light bg-success mt-2">
          <h1>
            Sermons <Mic />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>Need to build this page based on the content from rumble API</Col>
      </Row>
    </>
  );
}
