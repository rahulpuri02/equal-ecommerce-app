import '../styles/globals.css'
import store from "../redux/store";
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {SessionProvider} from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
      <Toaster />
   <Component {...pageProps} />
   </Provider>
   </SessionProvider>

   )
}


