import { useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllArticles, isLoading } from "./articlesSlice";
import '../css/articleSearch.css';

export const SearchBar = (props) => {
    const textInput = useRef(null);
    const dispatch = useDispatch();
    const isLoadingArticles = useSelector(isLoading);

const [searchInput, setSearchInput] = useState('');

const searchItems = (e) =>{
    dispatch(loadAllArticles(textInput.current.value));
} 

console.log(searchInput);


    return (
        <div id="search-container">
        <input type='text' placeholder="Search..." ref={textInput} />
        <button onClick={searchItems}><svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
        </div>
    )
}