const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const ArticleModel = require('./Models/ArticleModel');

const DB_URI = 'your_uri';

const typeDefs = gql`
    type Article{
        id:ID!,
        title:String!,
        content:String!
    }

    type Query{
        getArticles:[Article]!,
        getArticle(id:ID!):Article!
    }

    type Mutation{
        writeArticle(title:String!,content:String!):Article!
        deleteArticle(id:ID!):String!
    }
`;

const resolvers = {
    Query:{
        async getArticles(){
            const articles=await ArticleModel.find();
            return articles;
        },

        async getArticle(parent,args){
            try{
                const {id}=args;
                return await ArticleModel.findById(id);       
            }catch(error){
                throw new error;
            }
        }
    },

    Mutation:{
        writeArticle:async (parent,args)=>{
            try{
                const article={
                    title:args.title,
                    content:args.content
                }
                return await ArticleModel.create(article);
            }catch(error){
                throw new error;
            }
        },

        deleteArticle:async (_,args)=>{
            try{
                const {id}=args;
                await ArticleModel.findByIdAndDelete(id);
                return "Makale başarıyla silindi!";
            }catch(error){
                throw new error;
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(DB_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('MongoDB bağlantısı başarılı!');
    return server.listen({port:5000});
}).then((res)=>{
    console.log(`server ${res.url} adresinde çalışıyor!`);
});
