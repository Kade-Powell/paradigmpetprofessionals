import Image from 'next/image';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <>
      <Row>
        <Col className="text-center mt-2">
          <h2 className="text-info">Who We Are</h2>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={12} xl={4}></Col>
      </Row>
      <Row>
        <Col className="mb-2"></Col>
      </Row>
    </>
  );
}
