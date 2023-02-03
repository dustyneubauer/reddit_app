import React, {useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux';
import { loadCurrentArticle, selectArticle, isLoadingArticle, } from "./currentArticleSlice";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";

export const ClickedArticle = () => {
    const dispatch=useDispatch();
    const article = useSelector(selectArticle);
    const clickedArticleIsLoading = useSelector(isLoadingArticle);  

    const {articleId, articleTitle} = useParams();

    useEffect(()=>{
        dispatch(loadCurrentArticle(articleId, articleTitle))
    },[articleId, articleTitle])
    

    if (clickedArticleIsLoading) {
        return <div>Loading Article</div>
    }else if (!article){
        return null;
    }

const currentArticle = article[0].data.children[0].data

const currentArticleComments = article[1].data.children.map(element => {
    const commentsContainer = {};
    commentsContainer.id = element.data.id;
    commentsContainer.author = element.data.author;
    commentsContainer.body = element.data.body;
    return commentsContainer;
})


    return (
        <>
            <h1>{currentArticle.title}</h1>
            <img src={currentArticle.thumbnail}/>
            <h4>Posted by: {currentArticle.author}</h4>
        {currentArticleComments.map(element=>{
            return (
                <div key={element.id}>
                    <h3><Markdown>{element.body}</Markdown></h3>
                    <h4>Comment by: {element.author}</h4>
                </div>
            )
        })}

        </>
    );

    
}

