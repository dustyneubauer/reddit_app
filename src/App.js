import logo from './logo.svg';
import './App.css';
import {Articles} from "./components/Articles/articles";
import { SearchBar} from "./components/Articles/articleSearch";
import {ClickedArticle} from "./components/Articles/currentArticle";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar />
      </header>
      {/* <div>
        <ClickedArticle />
      </div> */}
      <Articles />
    </div>
  );
}

export default App;
