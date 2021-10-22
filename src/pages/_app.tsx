import { Navbar } from '../components/Navbar';
import '../styles/global.scss';

function MyApp({ Component, pageProps }, {params}) {
  
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
