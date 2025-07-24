import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import ArticleList from './components/ArticleList';
import WriteArticle from './components/WriteArticle';
import Title from './components/Title';

function App() {
  return (
    <Router>
      <Title/>
      <Routes>
        <Route exact path="/" element={<ArticleList/>}  />
        <Route path="/add" element={<WriteArticle/>}  />
      </Routes>
    </Router>
  );
}

export default App;
