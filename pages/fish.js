import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fish from '../public/fish.jpg';
import fish2 from '../public/fish2.jpg';
import Image from 'next/image';

import CustomLoader from '../components/CustomLoader';

export default function Fish() {
  return (
    <>
      <Row className="mt-3">
        <Col className="text-center">
          <h2 className="text-info">Fish</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>
            Fish represent a broad class of aquatic animals that can live in
            fresh or saltwater, depending on the species. Bringing fish into
            your home can be an exciting hobby, especially if you intend to
            breed them, and the presence of a fish tank in your home can induce
            feelings of peace and tranquility.
          </p>
          <p>
            Whether you are bringing your fish home for the first time or
            maintaining your aquarium, it is important to test your water{' '}
            <b>once per week</b> to ensure it is free from toxins that can harm
            your fish.
          </p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <h4 className="text-primary">
            <i>Freshwater Fish</i>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            There are several freshwater fish to choose from when setting up
            your aquarium, but it is best to consult with a “Pexpert” to ensure
            your fish will get along! No matter the species, ensure your fish
            are suited for a freshwater environment by investing in a water
            testing kit. Follow these general water chemistry guidelines to
            ensure your fish will adapt well to your aquarium and avoid
            ingesting toxins that can harm or kill your fish:
            <ul>
              <li>pH Level: 6.8–7.6 (7.0 is considered neutral)</li>
              <li>Ammonia: any level above zero is harmful to fish</li>
              <li>Nitrates: 5 to 10 ppm</li>
              <li>Nitrites: less than 0.5 ppm</li>
            </ul>
          </p>
        </Col>
        <Col sm={2}>
          <Image
            src={fish2}
            className="rounded-circle"
            layout="intrinsic"
            alt="cat"
            loader={CustomLoader}
          />
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <h4 className="text-primary">
            <i>Saltwater Fish</i>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <Image
            src={fish}
            className="rounded-circle"
            layout="intrinsic"
            alt="cat"
            loader={CustomLoader}
          />
        </Col>
        <Col>
          <p>
            Saltwater fish also offer several options when it comes to choosing
            among species for your aquarium. As with freshwater fish, consult
            with a “Pexpert” to ensure your fish will get along are suited for a
            saltwater environment. Following these general guidelines to avoid
            dangerous water conditions and ensure the appropriate salinity level
            for your fishies:
            <ul>
              {' '}
              <li>Salinity: 1.020–1.028 sg</li>{' '}
              <li>pH Level: 7.6–8.4 (7.0 is considered neutral)</li>
              <li>Ammonia: any level above 0.1 ppm requires attention</li>
              <li>Nitrates: 10 to 40 ppm • Nitrites: less than 0.2 ppm</li>
            </ul>
          </p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <p>
            For more information on making your tap water safe for your fish,
            please visit:
            <ul>
              <li>
                <a href="http://www.theaquariumwiki.org/wiki/How_to_make_tap_water_safe_for_fish">
                  http://www.theaquariumwiki.org/wiki/How_to_make_tap_water_safe_for_fish
                </a>
              </li>
              <li>
                <a href="http://fishbase.org/home.htm">
                  http://fishbase.org/home.htm
                </a>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
    </>
  );
}
