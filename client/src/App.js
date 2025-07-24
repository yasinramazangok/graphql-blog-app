import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import ArticleList from './components/ArticleList';
import WriteArticle from './components/WriteArticle';
import Title from './components/Title';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Title/>
      <Routes>
        <Route exact path="/" element={<ArticleList/>}  />
        <Route path="/add" element={<WriteArticle/>}  />
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;
