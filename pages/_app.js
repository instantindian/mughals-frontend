import Header from '../components/Header'
import '@/styles/globals.css'
import Head from 'next/head'
import "../pages/index.css"
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { ClerkProvider } from '@clerk/nextjs'



export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
                <title>Mughals</title>
                <meta
                    name="Mughals"
                    content="Indian food in united states of america"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/mainlogo2.jpg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

    <ClerkProvider
    appearance={{
      logoPlacement: "outside",
      elements:{
        formButtonPrimary: 
        "px-7 py-3 w-full bg-gradient-to-bl from-secondaryColor to-thirdColor text-white text-center text-md rounded-md shadow-xl block sm:w-auto font-semibold"
      }

    }
    }
    {...pageProps} >
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </Provider>
    </ClerkProvider>
  </>
  ) 
  
}
