const channels = [{
  id: 1,
  name: 'Soccer'
}, {
  id: 2,
  name: 'Baseball' 
}]

export const resolvers = {
  Query: {
    channels: () => {
      return channels
    },
  },
}