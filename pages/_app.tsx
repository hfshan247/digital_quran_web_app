import '../styles/globals.css';
import Header from '../components/header';
import PanionNavBar from '../components/navbar';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header />
      <PanionNavBar />
      <Component {...pageProps} />
    </>
  );

}

export default MyApp;
