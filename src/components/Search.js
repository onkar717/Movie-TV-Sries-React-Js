import { Tab, Tabs, createMuiTheme } from "@material-ui/core";
import { Button, TextField, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Singlecontent from './Singlecontent'
import CustomPagination from "../Pagination.js/CustomPagination";

const Search = () => {
  const [type, settype] = useState(0);
  const [page, setpage] = useState(1);
  const [state, setstate] = useState();
  const [numofpages, setnumofpages] = useState();
  const [content, setcontent] = useState();
  const [Search, setSearch] = useState("");

  const fetchsearch = async () => {
    const url = `https://api.themoviedb.org/3/serach/${
      type ? "tv" : "movie"
    }?api_key=${
      process.env.REACT_APP_KEY
    }&language=en=en-US&query=${Search}&page=${page}&include_adult=false`;
    const data = await fetch(url);
    const response = await data.json();
    setcontent(response.results);
    setnumofpages(data.totaL_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchsearch();
  }, [page, type]);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  return (
    <>
      <span className="PageTitle">Search</span>
      <ThemeProvider theme={darkTheme}>
        <TextField
          style={{ flex: 1 }}
          className="searchbox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="conained"
          style={{ paddingBottom: 5 }}
          indicatorColor="primary"
          textColor="primary"
          value={type}
        >
          <button>Search</button>
        </Button>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newvalue) => {
            settype(newvalue);
            setpage(1);
          }}
        >
          <Tab style={{ width: "50%" }} label="Serach Movies" />
          <Tab style={{ width: "50%" }} label="Serach TV Series" />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content && content.map((c) => {
          <Singlecontent  key={c.id} om={c} />
        })}
        {Search && !content (type ? <h2>No Series Found</h2> : <h2>No movies Found</h2>)}
      </div>
      {numofpages > 1 && (
        <CustomPagination setpage={setpage} numofpages={numofpages} />
      )}
    </>
  );
};

export default Search;
