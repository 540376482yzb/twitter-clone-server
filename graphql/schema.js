module.exports = `
  type Tweet {
    _id:ID!,
    text:String!,
    createdAt:String!,
    updatedAt:String!
  }

  type Message {
    message: String
  }

  type Query {
    getTweet(_id:ID!): Tweet
    getTweets:[Tweet]
  }

  type Mutation {
    createTweet(text:String!):Tweet
    updateTweet(_id:ID!, text:String):Tweet
    deleteTweet(_id:ID!): Message
  }

  schema{
    query:Query,
    mutation:Mutation
  }
`
