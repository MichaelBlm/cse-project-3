import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleContext } from './ArticleContext';

interface Article {
  title: string;
  content: string;
}

const AddArticlePage: React.FC = () => {
  const [article, setArticle] = useState<Article>({ title: '', content: '' });
  const { addArticle } = useContext(ArticleContext)!;
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addArticle(article);
    setArticle({ title: '', content: '' });  // Clear the form
    navigate('/');  // Navigate to home page
  };

  return (
    <div>
      <h2>Add Article Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            name="content"
            value={article.content}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={{width: "300px"}}>Add Article</button>
      </form>
      <input type='checkbox'/>
      <input type='radio' />
    </div>
  );
}

export default AddArticlePage;
