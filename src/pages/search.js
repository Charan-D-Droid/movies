import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Card from "/components/card";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();

  const fetch = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchText}}`
    );

    setContent(data.results);
  };

  // useEffect() => {
  //   window.scroll(0, 0);
  //   fetch();
  // },[page];
  return (
    <div className="search">
      <TextField
        style={{ flex: 1 }}
        className="searchBox"
        label="Search"
        variant="filled"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
