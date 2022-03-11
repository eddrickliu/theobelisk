import '../styles/index.css'
import '../styles/App.css'
import '../styles/globals.css'
import { TransactionsProvider } from "../src/context/TransactionContext";

function MyApp({ Component, pageProps }) {
  return  <TransactionsProvider>
            <Component {...pageProps} />
          </TransactionsProvider>
}

export default MyApp
