import React, { createContext, useState } from 'react';

interface Article {
  id: number;
  title: string;
  content: string;

}

const initialArticles: Article[] = [
  { id: 1, title: 'Article 1', content: 'This is the content for Article 1.' },
  { id: 2, title: 'Article 2', content: 'This is the content for Article 2.' },
  { id: 3, title: 'Article 3', content: 'This is the content for Article 3.' },
];

interface ArticleContextProps {
  articles: Article[];
  addArticle: (article: Omit<Article, 'id'>) => void;
}

export const ArticleContext = createContext<ArticleContextProps | undefined>(undefined);

interface ArticleProviderProps {
  children: React.ReactNode;
}

export const ArticleProvider: React.FC<ArticleProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>(initialArticles);

  const addArticle = (article: Omit<Article, 'id'>) => {
    const newArticle = { ...article, id: articles.length + 1 };
    setArticles([...articles, newArticle]);
  };

  return (
    <ArticleContext.Provider value={{ articles, addArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
