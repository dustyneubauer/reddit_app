import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { loadAllArticles, selectAllArticles, isLoading } from "./articlesSlice";
// import articlesList from "./articlesList";



export const Articles = () => {
    const dispatch = useDispatch();
    const viewArticles = useSelector(selectAllArticles);
    const isLoadingArticles = useSelector(isLoading);

const allArticles = viewArticles.map(article => {
    const container = {};
    container.author = article.data.author;
    container.title = article.data.title;
    container.image = article.data.thumbnail;
    container.reroute = article.data.url;

    return container;
})

    useEffect(() => {
        dispatch(loadAllArticles());
    }, [dispatch]);

    if (isLoadingArticles) {
        return <div>loading state</div>;
      }

    return (
        <>
        <h2>All Articles</h2>
        {allArticles.forEach(element => {
        <button>
            <h3>{allArticles.title}</h3>;
            <h4>{allArticles.author}</h4>;
            <img src='{article.url}'/>;
        </button>
        })}
        </>
       );
   };