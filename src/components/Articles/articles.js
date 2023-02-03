import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { loadAllArticles, selectAllArticles, isLoading } from "./articlesSlice";
// import articlesList from "./articlesList";
import { Link } from "react-router-dom";



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
    } else if(image === '') {
        container.image= '../images/reddit.png'
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
        <h2>All Articles</h2>
        {allArticles.map((element) => { 
            return (
            <div key={element.id}>
                <Link to={`/article/${element.id}/${element.title}`}>    
                    <h3>{element.title}</h3>
                    <img src={element.image}/>
                    <h4>Posted By: {element.author}</h4>
                    <p>Click to view comments</p>
                </Link>
            </div>
            );
        })}
        </>
       );
   };