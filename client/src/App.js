import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
})

const client = new ApolloClient({
  networkInterface,
});

const ChannelsList = ({ data: { loading, error, channels }}) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return <ul>
    {channels.map (ch => <li key={ch.id}>{ch.name}</li>)}
  </ul>
}

const channelsListQuery = gql `
  query ChannelsListQuery {
    channels {
      id
      name
    }
  } 
`
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList)

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
            <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
