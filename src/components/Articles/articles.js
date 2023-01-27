import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { loadAllArticles, selectAllArticles, isLoading } from "./articlesSlice";
import { store } from "../../store";
// import articlesList from "./articlesList";



export const Articles = () => {
    const dispatch = useDispatch();
    const viewArticles = useSelector(selectAllArticles);
    const isLoadingArticles = useSelector(isLoading);


const allArticles = viewArticles.data.children.map(article => {
    const container = {};
    container.author = article.author;
    container.title = article.title;
    container.image = article.thumbnail;
    container.reroute = article.url;

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
            <h3>{element.title}</h3>;
            <h4>{element.author}</h4>;
            <img src='{element.url}'/>;
        </button>
        })}
        </>
       );
   };