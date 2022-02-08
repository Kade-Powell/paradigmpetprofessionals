import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import CustomLoader from '../components/CustomLoader';
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
          <Image
            src={logo}
            layout="intrinsic"
            alt="logo"
            loader={CustomLoader}
          />
        </Navbar.Brand>
        <h6 className="align-middle text-light">Paradigm Pet Proffesionals</h6>
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
            <h5 className="text-primary">Your Information</h5>

            <label htmlFor="name">Your Name:</label>
            <input
              required
              className="form-control"
              name="name"
              id="name"
              placeholder="John Smith"
            />
            <label htmlFor="phone">Phone Number:</label>
            <input
              required
              className="form-control"
              type="tel"
              name="phone"
              id="phone"
              placeholder="999-999-9999"
            />
            <label htmlFor="email">Email Address:</label>
            <input
              required
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="johnsmith@gmail.com"
            />
            <label htmlFor="timezone_offset">Time Zone:</label>
            <select
              name="timezone_offset"
              id="timezone-offset"
              className="form-control"
            >
              <option value="">Select</option>{' '}
              <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
              <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
              <option value="-10:00">(GMT -10:00) Hawaii</option>
              <option value="-09:50">(GMT -9:30) Taiohae</option>
              <option value="-09:00">(GMT -9:00) Alaska</option>
              <option value="-08:00">
                (GMT -8:00) Pacific Time (US &amp; Canada)
              </option>
              <option value="-07:00">
                (GMT -7:00) Mountain Time (US &amp; Canada)
              </option>
              <option value="-06:00">
                (GMT -6:00) Central Time (US &amp; Canada), Mexico City
              </option>
              <option value="-05:00">
                (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
              </option>
              <option value="-04:50">(GMT -4:30) Caracas</option>
              <option value="-04:00">
                (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
              </option>
              <option value="-03:50">(GMT -3:30) Newfoundland</option>
              <option value="-03:00">
                (GMT -3:00) Brazil, Buenos Aires, Georgetown
              </option>
              <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
              <option value="-01:00">
                (GMT -1:00) Azores, Cape Verde Islands
              </option>
              <option value="+00:00">
                (GMT) Western Europe Time, London, Lisbon, Casablanca
              </option>
              <option value="+01:00">
                (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
              </option>
              <option value="+02:00">
                (GMT +2:00) Kaliningrad, South Africa
              </option>
              <option value="+03:00">
                (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
              </option>
              <option value="+03:50">(GMT +3:30) Tehran</option>
              <option value="+04:00">
                (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
              </option>
              <option value="+04:50">(GMT +4:30) Kabul</option>
              <option value="+05:00">
                (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
              </option>
              <option value="+05:50">
                (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
              </option>
              <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
              <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
              <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
              <option value="+07:00">
                (GMT +7:00) Bangkok, Hanoi, Jakarta
              </option>
              <option value="+08:00">
                (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
              </option>
              <option value="+08:75">(GMT +8:45) Eucla</option>
              <option value="+09:00">
                (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
              </option>
              <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
              <option value="+10:00">
                (GMT +10:00) Eastern Australia, Guam, Vladivostok
              </option>
              <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
              <option value="+11:00">
                (GMT +11:00) Magadan, Solomon Islands, New Caledonia
              </option>
              <option value="+11:50">(GMT +11:30) Norfolk Island</option>
              <option value="+12:00">
                (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
              </option>
              <option value="+12:75">(GMT +12:45) Chatham Islands</option>
              <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
              <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
            </select>
            <h5 className="text-primary mt-2">Your Pet&apos;s Information</h5>

            <label htmlFor="petName">Your Pet&apos;s Name:</label>
            <input
              required
              className="form-control"
              name="petName"
              id="petName"
              placeholder="Ruffles"
            />
            <label htmlFor="petType">What kind of pet do you have?</label>
            <input
              required
              className="form-control"
              name="petType"
              id="petType"
              placeholder="Dog"
            />
            <label htmlFor="petAge">How old is your pet?</label>
            <input
              required
              className="form-control"
              name="petAge"
              id="petAge"
              placeholder="2 years old"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Submit</Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Container className="bg-primary text-light" fluid="true">
        <Row>
          <Col className="text-start ms-2 mt-3">
            <Image
              src={logo2}
              layout="intrinsic"
              alt="logo"
              loader={CustomLoader}
            />
          </Col>
          <Col className="text-center mt-3">
            <button className="btn btn-info" onClick={handleShow}>
              Schedule A Consultation
            </button>
          </Col>
          <Col sm={2} className="text-center mt-2">
            <div className="align-middle">
              {' '}
              <u> Contact Us:</u>
            </div>
            <div className="align-middle">999-999-9999</div>
            <div className="align-middle">pexperts@ppp.com</div>
          </Col>
          <Col sm={2} className="text-end me-2 mt-2">
            <Image
              src={logo}
              layout="intrinsic"
              alt="logo"
              loader={CustomLoader}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <small>© Paradigm Pet Proffesionals 2022</small>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
