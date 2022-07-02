import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import apiUrl from './apiConfig'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppDataProvider } from './store/AppDataContext'
import { AuthContextProvider } from './store/AuthContext'
import { MapsProvider } from './store/MapsContext'

const client = new ApolloClient({
  uri: `${apiUrl}/graphql`,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AuthContextProvider>
        <AppDataProvider>
          <MapsProvider>
            <App />
          </MapsProvider>
        </AppDataProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </ApolloProvider>
    ,
  document.getElementById('root')
);
