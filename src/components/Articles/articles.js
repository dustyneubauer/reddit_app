import { useSelector, useDispatch } from "react-redux";
import React, { Component, useEffect } from "react";
import { loadAllArticles, selectAllArticles, isLoading } from "./articlesSlice";
// import articlesList from "./articlesList";
import {loadCurrentArticle} from "./currentArticleSlice";



export const Articles = () => {
    const dispatch = useDispatch();
    const viewArticles = useSelector(selectAllArticles);
    const isLoadingArticles = useSelector(isLoading);


const allArticles = viewArticles.map(article => {
    const container = {};
    container.id =article.id;
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
        {allArticles.map((element) => { 
            return (
            <div key={element.id}>
                <button onClick={(e) => dispatch(loadCurrentArticle(element.id, element.title))}>    
                    <h3>{element.title}</h3>
                    <img src={element.image}/>
                    <h4>Posted By: {element.author}</h4>
                    Click to view comments
                </button>
            </div>
            );
        })}
        </>
       );
   };