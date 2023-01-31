import React from "react";
import { useDispatch, useSelector} from 'react-redux';
import { selectArticle, isLoadingArticle, } from "./currentArticleSlice";
import Markdown from 'markdown-to-jsx';

export const ClickedArticle = () => {
    const dispatch=useDispatch();
    const article = useSelector(selectArticle);
    const clickedArticleIsLoading = useSelector(isLoadingArticle);  

console.log(article);

const currentArticle = article[0].data.children.map(element => {
    const articleContainer= {};
    articleContainer.id = element.data.id;
    articleContainer.title = element.data.title;
    articleContainer.author = element.data.author;
    articleContainer.image = element.data.thumbnail;
})

const currentArticleComments = article[1].data.children.map(element => {
    const commentsContainer = {};
    commentsContainer.id = element.data.id;
    commentsContainer.author = element.data.id;
    commentsContainer.content = element.data.body;
})


    if (clickedArticleIsLoading) {
        return <div>Loading Article</div>
    }else if (!article){
        return null;
    }

    return (
        <>
            <h1>{currentArticle.title}</h1>
            <h4>Posted by: {currentArticle.author}</h4>
        {currentArticleComments.map(element=>{
            return (
                <div key={element.id}>
                    <h3>{element.content}</h3>
                    <h4>Comment by: {element.author}</h4>
                </div>
            )
        })}

        </>
    );

    
}

