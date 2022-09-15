import axios from "axios";
import { useEffect, useState } from "react";
import Content from "/components/content";

const Movies = () => {
  const [content, setContent] = useState([]);
  // console.log(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.tvmaze.com/shows`);
    setContent(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <span className="pageTitle">Latest</span>
      <div className="latest">
        {content && content.map((c) => console.log(c))}
      </div>
    </div>
  );
};

export default Movies;
