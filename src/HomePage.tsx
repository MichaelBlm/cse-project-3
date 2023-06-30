import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArticleContext } from './ArticleContext';
import Lion from './assets/ingo-stiller-3tkxfe2GocY-unsplash.jpg';
import './index.css';

interface Article {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const { articles } = useContext(ArticleContext)!;

  return (
    <div>
      <h2>Home Page</h2>
      <img src={ Lion }  style={{ width: '500px'}}/>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <input type='checkbox'/>
      <input type='radio' />
    </div>
  );
}

export default HomePage;
