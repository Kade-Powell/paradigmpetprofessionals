import Image from 'next/image';
import Link from 'next/link';

import CustomLoader from '../components/CustomLoader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from '../public/logo2.png';
import dog from '../public/dog.jpg';
import cat from '../public/cat.jpg';
import fish from '../public/fish.jpg';

export default function Home({ handleShow }) {
  return (
    <>
      <Row className="mt-2">
        <Col>
          <Image
            src={logo2}
            layout="intrinsic"
            alt="logo"
            loader={CustomLoader}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2 className="text-info">Our Mission</h2>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p>
            Pets are nature&apos;s gift to humanity. It has been scientifically
            proven that opening our homes and hearts to a pet increases our
            longevity and improves our overall quality of life as well as the
            lives of our pets. At Pet Paradigm Professionals, our mission is to
            offer resources to help you care for your furry, scaly, feathery,
            and slimy loved ones. Our pet experts—or “Pexperts”—have been
            working with pet owners and professionals alike for the past twelve
            years. They offer one-on-one consultations with current and
            prospective pet owners as well as group presentations designed for
            veterinary, pet shelter, and pet breeding professionals.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Looking for basic pet care advice for the most common type of pets?
            Need additional help determining which type of pet is right for you
            and your family? We will work with you and provide tailored
            evidence-based pet care to ensure lifelong health and wellness of
            your new companion.
          </p>
          <button className="btn btn-info form-control" onClick={handleShow}>
            Contact A Pexpert
          </button>
        </Col>
      </Row>
      <Row className="mt-4 text-center">
        <Col>
          <Link href="/dogs" passHref>
            <Image
              src={dog}
              className="rounded-circle"
              layout="intrinsic"
              loader={CustomLoader}
              alt="Dog"
            />
          </Link>
        </Col>
        <Col>
          <Link href="/cats" passHref>
            <Image
              src={cat}
              className="rounded-circle"
              layout="intrinsic"
              loader={CustomLoader}
              alt="Cat"
            />
          </Link>
        </Col>
        <Col>
          <Link href="/fish" passHref>
            <Image
              src={fish}
              className="rounded-circle"
              layout="intrinsic"
              loader={CustomLoader}
              alt="Fish"
            />
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-start">
          <h2 className="text-info">Adoption Resources</h2>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p>
            Looking for your new best friend? The following organizations can
            help you find and adopt the perfect companion:
            <ul>
              <li>
                General Adoption Resources:{' '}
                <a href="https://theshelterpetproject.org/">
                  https://theshelterpetproject.org/
                </a>
              </li>
              <li>
                ASPCA:{' '}
                <a href="https://www.aspca.org/">https://www.aspca.org/</a>
              </li>
              <li>
                Fish Rescue:{' '}
                <a href="https://www.sterlingshelter.org/humane-society/koi-fish-rescue/">
                  https://www.sterlingshelter.org/humane-society/koi-fish-rescue/
                </a>
              </li>
              <li>
                Snake Rescue:{' '}
                <a href="https://savethesnakes.org/snakerescuecall/">
                  https://savethesnakes.org/snakerescuecall/
                </a>
              </li>
              <li>
                Bird Rescue:{' '}
                <a href="https://ftlob.rescuegroups.org/">
                  https://ftlob.rescuegroups.org/
                </a>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p>
            We are also happy to help you navigate the adoption process! We will
            guide you through each step in the process from determining which
            type of pet is best suited for your family and home environment, to
            completing the necessary paperwork, to bringing your new loved one
            home. Please fill out our contact form to request a consultation. We
            will contact you within 48 hours to schedule a consultation. All
            fields are required.
          </p>
          <button className="btn btn-info form-control" onClick={handleShow}>
            Schedule a Consultation
          </button>
        </Col>
      </Row>
    </>
  );
}
