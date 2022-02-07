import Image from "next/image";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import firstSlide from "../public/firstSlide.png";
import secondSlide from "../public/secondSlide.png";
import thirdSlide from "../public/thirdSlide.png";

import Carousel from "react-bootstrap/Carousel";
import {
  Book,
  ListCheck,
  Map,
  Mic,
  People,
  Person,
  Sun,
} from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <Carousel className="bg-dark">
            <Carousel.Item interval={1700}>
              <Image
                className="d-block w-100"
                src={firstSlide}
                alt="First slide"
                layout="responsive"
              />
            </Carousel.Item>
            <Carousel.Item interval={1700}>
              <Image
                className="d-block w-100"
                src={secondSlide}
                alt="Second slide"
                layout="responsive"
              />
            </Carousel.Item>
            <Carousel.Item interval={1700}>
              <Image
                className="d-block w-100"
                src={thirdSlide}
                alt="Third slide"
                layout="responsive"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2">
          <h1>Who We Are</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="text-center">
                Bible Centered <Book className="text-info" />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                At Journey we believe that the Bible is the inspired Word of God
                and that it is a perfect treasure of heavenly instruction. We
                believe that the Bible is necessary for the life and the growth
                of the church and that the Bible is sufficient in it’s wisdom
                for the church and instruction to the church. Therefore we want
                the Bible to be central in our individual lives and in the life
                of Journey Church.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="text-center">
                Disciple Making <Person className="text-info" />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                At Journey we believe that the Lord did not leave it to us to
                decide what the mission of the church should be. We believe that
                the Lord has made it clear that we are live our lives making
                disciples of Jesus Christ. Therefore we want to be involved in
                the lives of others for their spiritual good encouraging one
                another in our faithfulness to our Lord Jesus Christ and being
                involved in the lives of the world around us in such a way that
                we are able to share and show the love of Jesus Christ.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="text-center">
                God Glorifying <Sun className="text-info" />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                At Journey we believe that the chief end of man is to glorify
                God and to enjoy Him forever. We believe that true life and
                lasting joy is the result of living for the glory of our Triune
                God. Therefore by God’s grace we seek to be a community of
                Christ followers who seek to help one another live our lives to
                the Glory of God.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">
          <Link href="/about">
            <Button variant="outline-info" className="float-end">
              Learn More About Us
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="bg-secondary">
        <Col xs={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">
                Where to find us <Map className="text-info" />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5823.6803263883285!2d-82.92475505929512!3d32.520746193005714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc9f5d8c79fadf86!2sThe%20Journey%20Church!5e0!3m2!1sen!2sus!4v1630011503195!5m2!1sen!2sus"
                  allowFullScreen={false}
                  loading="lazy"
                  width="100%"
                ></iframe>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} xl={6}>
          <p className="card-companion-text text-light">
            Our church building is located 1711 Telfair St. (HWY 441) Dublin,
            GA. The building is located between Radney Chiropractic and Gay Wood
            Co.
            <br />
            <br />
            We look forward to seeing you!
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2">
          <h1>Frequently Asked Questions</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="text-center">
                What Type Of Service Do You Have? <Mic className="text-info" />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Our services generally start with a reading from the scripture.
                Then we have a time of praise and worship that is generally
                three songs. Afterwards we have a practical biblical teaching
                with that is easy to understand and apply.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="text-center">
                How Should I Dress? <ListCheck className="text-info" />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We care more about you than what type clothes you wear, so dress
                is always casual. Clothing is a must, but we want you to wear
                what is comfortable and you will fit right in.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="text-center">
                What&#39;s Available For My Kids?
                <People className="text-info" />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                The Journey Church offers a safe and exciting children’s program
                during the worship service for your children, birth to Pre-K. As
                you enter the worship area you will signs pointing you towards
                the Journey kids check-in station. Check your kid(s) in with the
                volunteer at the check-in station. During Journey Kids, your
                children will experience fun Bible lessons, activities and games
                to help them build a spiritual foundation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
