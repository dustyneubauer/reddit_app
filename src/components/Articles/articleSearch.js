import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllArticles, isLoading } from "./articlesSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const isLoadingArticles = useSelector(isLoading);

    const handleSubmit = useEffect(() =>{
        dispatch(loadAllArticles((e) => e.target.value.toLowerCase()));
    }, [useDispatch]); 

    return (
        <form action={handleSubmit}>
            <input type='search'></input>
            <input type='submit' value='search'></input>
        </form>
    )
}