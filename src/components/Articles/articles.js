import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { loadAllArticles, selectAllArticles, isLoading } from "./articlesSlice";
// import articlesList from "./articlesList";
import { Link } from "react-router-dom";
import '../css/articles.css';
import { renderIntoDocument } from "react-dom/test-utils";



export const Articles = () => {
    const dispatch = useDispatch();
    const viewArticles = useSelector(selectAllArticles);
    const isLoadingArticles = useSelector(isLoading);


const allArticles = viewArticles.map(article => {
    const container = {};
    const image = article.thumbnail;
    container.id =article.id;
    container.author = article.author;
    container.title = article.title;
    if (image){
    container.image = image;
    } else if(image === null) {
        container.image= '../images/reddit.png';
    }
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
        <h2>Reddit Sports</h2>
        <div class="all-articles-container">
        {allArticles.map((element) => { 
            return (
            <div key={element.id} class="article-container">
                <Link to={`/article/${element.id}/${element.title}`}>    
                    <h3 class="title">{element.title}</h3>
                    <img src={element.image}/>
                    <div class="author-container">
                    <h4>Posted By: {element.author}</h4>
                    </div>
                </Link>
            </div>
            );
        })}
        </div>
        </>
       );
   };