import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../public/logo.png";
import pbits from "../public/pbits.png";

import {
  CalendarEvent,
  Facebook,
  HouseDoor,
  InfoCircle,
  Instagram,
  Newspaper,
  PlayBtn,
  Gift,
} from "react-bootstrap-icons";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>The Journey Church</title>
        <meta name="description" content="The Journey Church In Dublin GA" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jc.ico" />
      </Head>

      <Navbar className="sticky-top container-fluid" bg="light" expand="lg">
        <Navbar.Brand style={{ width: "30vw" }}>
          <Image src={logo} alt="The Journey Church" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler-right"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link href="/" passHref>
              <a
                className={
                  router.pathname === "/"
                    ? "nav-item nav-link  text-success"
                    : "nav-item nav-link"
                }
              >
                <HouseDoor />
                home
              </a>
            </Link>

            <Link href="/about" className="nav-item nav-link" passHref>
              <a
                className={
                  router.pathname === "/about"
                    ? "nav-item nav-link  text-success"
                    : "nav-item nav-link"
                }
              >
                <InfoCircle />
                about
              </a>
            </Link>

            <Link href="/events" className="nav-item nav-link" passHref>
              <a
                className={
                  router.pathname === "/events"
                    ? "nav-item nav-link  text-success"
                    : "nav-item nav-link"
                }
              >
                <CalendarEvent />
                events
              </a>
            </Link>
            <Link href="/watch" className="nav-item nav-link" passHref>
              <a
                className={
                  router.pathname === "/watch"
                    ? "nav-item nav-link  text-success "
                    : "nav-item nav-link"
                }
              >
                <PlayBtn />
                watch
              </a>
            </Link>
            <Link href="/news" className="nav-item nav-link" passHref>
              <a
                className={
                  router.pathname === "/news"
                    ? "nav-item nav-link  text-success "
                    : "nav-item nav-link"
                }
              >
                <Newspaper />
                news
              </a>
            </Link>
            <Link href="/give" className="nav-item nav-link" passHref>
              <a
                className={
                  router.pathname === "/give"
                    ? "nav-item nav-link  text-success "
                    : "nav-item nav-link"
                }
              >
                <Gift />
                give
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>{children}</Container>
      <Container
        className="bg-dark text-secondary overflow-hidden"
        fluid="true"
      >
        <Row>
          <Col className="text-center">
            <address>
              Find us:
              <small>
                <br />
                1711 Telfair St, Dublin, GA 31021
                <br />
                <a href="mailto:info@thejourneychurch.life">
                  info@thejourneychurch.life
                </a>
              </small>
            </address>
          </Col>
          <Col className="text-center">
            Affilations:
            <small>
              <br />
              <a href="http://www.laurensbaptist-ga.com/">
                Laurens Baptist Association
              </a>
              <br />
              <a href="http://gabaptist.org/">Georgia Baptist Convention</a>
            </small>
          </Col>
          <Col className="text-center ">
            Social Media:
            <br />
            <Col className="small">
              <a href="https://www.facebook.com/TheJourneyChurchDublin/">
                <Facebook />
              </a>
            </Col>
            <Col className="small">
              <a href="https://www.instagram.com/thejourneychurchdublin/?hl=en">
                <Instagram />
              </a>
            </Col>
          </Col>
        </Row>
        <Row className="overflow-hidden">
          <Col className="text-start">
            <small>© 2021 The Journey Church </small>
          </Col>
          <Col>
            <div style={{ width: "75px" }} className="float-end">
              <a href="https://www.pbits.online">
                <Image src={pbits} alt="PBITS" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
