import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { AdminProvider } from '../contexts/useAdmin'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../utils/apollo'
import { AuthProvider } from '../contexts/useAuth'

function MyApp ({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
      <AdminProvider>
        <Component {...pageProps} />
      </AdminProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}
export default MyApp
