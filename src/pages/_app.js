import '../assets/styles/globals.css'
import { Navbar } from '../layouts'

function MyApp({ Component, pageProps }) {
  return (
    <div className='app'>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
