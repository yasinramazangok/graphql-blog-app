const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');

const typeDefs = gql`
    type Article{
        id:ID!,
        title:String!,
        content:String!
    }

    type Query{
        getArticles:[Article]!
    }
`;

const resolvers = {
    Query:{
        getArticles(){
            const articles=[
                {id:1,title:'Makale Başlık 1',content:'Makale içerik 1'},
                {id:2,title:'Makale Başlık 2',content:'Makale içerik 2'},
                {id:3,title:'Makale Başlık 3',content:'Makale içerik 3'}
            ]
            return articles;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port:5000}).then((res)=>{
    console.log(`server ${res.url} adresinde çalışıyor!`);
});