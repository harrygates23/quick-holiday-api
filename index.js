const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

type Flight {
  price: Int
}

type Weather {
  temperature: Int
}

type Trip {
  placeName: String
  image: String
  description: String
  flight: Flight
  weather: Weather
}

type Query {
  recommendedTrips: [Trip]
}
`

const recommendedTrips = [{
  placeName: 'Stockholm',
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo-street-scene-in-gamla-stan-stockholm-sweden-scandinavia-europe-79469056.html&psig=AOvVaw3N7FjZCk1FOZyxUwPW_Q5X&ust=1651834244624000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjB15-YyPcCFQAAAAAdAAAAABAD',
  description: 'some info about this place, blah blah blah blah blah blah blah blah',
  sellingPoints: ['Landmarks', 'Food', 'Nightlife'],
  weather: {
    temperature: 20
  },
  flight: {
    price: 25000
  }
},
{
  placeName: 'Berlin',
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo-street-scene-in-gamla-stan-stockholm-sweden-scandinavia-europe-79469056.html&psig=AOvVaw3N7FjZCk1FOZyxUwPW_Q5X&ust=1651834244624000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjB15-YyPcCFQAAAAAdAAAAABAD',
  description: 'some info about this place, blah blah blah blah blah blah blah blah',
  sellingPoints: ['Beach', 'Surfing', 'Bars'],
  weather: {
    temperature: 22
  },
  flight: {
    price: 12400
  }
}]

const resolvers = {
  Query: {
    recommendedTrips: () => recommendedTrips,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});