import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleContext } from './ArticleContext';
import LikeButton from './LikeButton';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { articles } = useContext(ArticleContext)!;

  const articleId = Number(id);  // Convert the id to a number
  const article = articles.find(article => article.id === articleId);

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <LikeButton />
    </div>
  );
};

export default ArticlePage;
