import '../styles/globals.scss';
import Layout from '../components/Layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout handleShow={handleShow} show={show} handleClose={handleClose}>
      <Component
        {...pageProps}
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
      />
    </Layout>
  );
}

export default MyApp;
