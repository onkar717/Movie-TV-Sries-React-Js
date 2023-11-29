import React, { useEffect } from "react";
import { Chip } from "@mui/material";

const Genres = ({
  setpage,
  type,
  selectedgenres,
  setselectedgenres,
  genres,
  setgenres,
}) => {
  const fetchGenres = async () => {
    try {
      const url = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`;
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error(`Failed to fetch genres. Status: ${data.status}`);
      }
      const response = await data.json();
      setgenres(response.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  //   console.log(genres[0]?.id);

  const handleAdd = (genred) => {
    setselectedgenres([...selectedgenres, genred]);
    setgenres(genres.filter((c) => c.id !== genred.id));
    setpage(1);
  };

  const handelremoved = (genred) => {
    setselectedgenres(selectedgenres.filter((c) => c.id !== genred.id));
    setgenres([...genres, genred]);
    setpage(1);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setgenres([]);
    };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedgenres &&
        selectedgenres.map((genre) => (
          <Chip
            label={genre.name}
            key={genre.id}
            clickable
            size="small"
            color="primary"
            style={{ margin: "4px" }}
            onDelete={() => handelremoved(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            // label={genre.id}
            key={genre.id}
            clickable
            style={{ margin: "4px" }}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
