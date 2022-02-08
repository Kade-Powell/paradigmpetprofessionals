import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import logo from '../public/logo.png';
import logo2 from '../public/logo2.png';
const Layout = ({ children, handleShow, show, handleClose }) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Paradigm Pet Proffesionals</title>
        <meta name="description" content="Paradigm Pet Proffesionals" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar
        className="sticky-top container-fluid navbar-dark"
        bg="primary"
        expand="lg"
      >
        <Navbar.Brand href="/">
          <Image src={logo} layout="intrinsic" alt="logo" />
        </Navbar.Brand>
        <h6 class="align-middle text-light">Paradigm Pet Proffesionals</h6>
        <Navbar.Toggle
          className="navbar-toggler-right"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Link href="/" passHref>
              <a
                className={
                  router.pathname === '/'
                    ? 'nav-item nav-link  text-success'
                    : 'nav-item nav-link'
                }
              >
                Home
              </a>
            </Link>

            <Link href="/dogs" className="nav-item nav-link" passHref>
              <a
                className={
                  router.pathname === '/dogs'
                    ? 'nav-item nav-link  text-success'
                    : 'nav-item nav-link'
                }
              >
                Dogs
              </a>
            </Link>

            <Link href="/cats" className="nav-item nav-link" passHref>
              <a
                className={
                  router.pathname === '/cats'
                    ? 'nav-item nav-link  text-success'
                    : 'nav-item nav-link'
                }
              >
                Cats
              </a>
            </Link>
            <Link href="/fish" className="nav-item nav-link" passHref>
              <a
                className={
                  router.pathname === '/fish'
                    ? 'nav-item nav-link  text-success '
                    : 'nav-item nav-link'
                }
              >
                Fish
              </a>
            </Link>
            <Form className="d-flex">
              <Form.Control
                size="sm"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        {children}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Pexpert Consultation Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Submit</Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Container className="bg-primary text-light overflow-hidden" fluid="true">
        <Row className="mt-2">
          <Col className="text-start ms-2">
            <Image src={logo2} layout="intrinsic" alt="logo" />
          </Col>
          <Col className="text-center">
            <button className="btn btn-info" onClick={handleShow}>
              Schedule A Consultation
            </button>
          </Col>
          <Col sm={2} className="text-center">
            <div className="align-middle">
              {' '}
              <u> Contact Us:</u>
            </div>
            <div className="align-middle">999-999-9999</div>
            <div className="align-middle">pexperts@ppp.com</div>
          </Col>
          <Col sm={2} className="text-end me-2">
            <Image src={logo} layout="intrinsic" alt="logo" />
          </Col>
        </Row>
        <Row className="overflow-hidden">
          <Col className="text-center">
            <small>© Paradigm Pet Proffesionals 2022</small>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
