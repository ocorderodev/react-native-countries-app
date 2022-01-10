/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Apollo
const client = new ApolloClient({
    cache : new InMemoryCache(),
    link : new HttpLink({
        uri : 'https://countries.trevorblades.com/'
    })
});

const upTaskApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => upTaskApp);
