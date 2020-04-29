import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Byline from './components/Byline';
import Title from './components/Title';
import Intro from './components/Intro';
import Article from './components/Article';
import './App.css';

const defData = require('./components/defaultData.json');

function App() {
  // Declares a new state variable, we're calling this one 'article'
  const [article, setArticle] = useState(null);
  useEffect(() => {
     fetch('/api')
       .then(res => res.json())
       .then(article => {
         setArticle(article);
       });
   }, []);

  if (!article) {
    setArticle(defData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div id="content_wrapper" role="main">
        <Article article={article} />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
