
import '../global.css';
export default function MyApp({ Component, pageProps }) {
    return<>
    <h1>Домашнее задание</h1>
    <hr />
    <Component {...pageProps} />
    </> 
  }