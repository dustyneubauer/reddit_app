import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllArticles, isLoading } from "./articlesSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const isLoadingArticles = useSelector(isLoading);

const [searchInput, setSearchInput] = useState('');

const searchItems = (searchValue) =>{
    setSearchInput(searchValue);
    dispatch(loadAllArticles(searchInput));
} 

console.log(searchInput);

    return (
        <input placeholder="Search..." onChange={(e)=> searchItems(e.target.value)}/>
    )
}