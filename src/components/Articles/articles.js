import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { loadAllArticles, selectAllArticles, isLoading } from "./articlesSlice";
import articlesList from "./articlesList";



export const Articles = () => {
    const dispatch = useDispatch();
    const viewArticles = useSelector(selectAllArticles);
    const isLoadingArticles = useSelector(isLoading);

    useEffect(() => {
        dispatch(loadAllArticles());
    }, [dispatch]);

    if (isLoadingArticles) {
        return <div>loading state</div>;
      }

    return (
        <>
        <h2>All Articles</h2>
        {articlesList.map((thing)=> {
            <articlesList thing={thing} />
        })}
        </>
       );
   };