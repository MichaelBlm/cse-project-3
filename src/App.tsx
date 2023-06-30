import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import AddArticlePage from './AddArticlePage';
import { ArticleProvider } from './ArticleContext';

const App: React.FC = () => {
  return (
    <Router>
      <ArticleProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/add-article" element={<AddArticlePage />} />
      </Routes>
      </ArticleProvider>
    </Router>
  );
}

export default App;
