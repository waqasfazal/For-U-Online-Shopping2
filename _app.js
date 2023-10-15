// pages/_app.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css'; // Your global styles

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
