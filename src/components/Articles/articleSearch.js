import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllArticles, isLoading } from "./articlesSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const isLoadingArticles = useSelector(isLoading);

    // const onSubmit = useEffect(() =>{
    //     dispatch(loadAllArticles(e => e.target.value.toLowerCase()));
    // }, [useDispatch]); 

    return (
        <form>
            <input type="text"/>
            <input type ="submit" value="search"/>
        </form>
    )
}