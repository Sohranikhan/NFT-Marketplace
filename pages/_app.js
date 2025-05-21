// pages/_app.js
import { WalletProvider } from '@/context/WalletContext';
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import '../styles/globals.css'; // Adjust the path as necessary
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <WalletProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </WalletProvider>
    </>
  );
}

export default MyApp;
