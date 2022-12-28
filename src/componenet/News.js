import React from "react";
import { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("react");
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react"
  );
  const [loading, setLoading]=useState(false)
  const fetchNews = () => {

    // fetch data from api
    setLoading(true)
    fetch(url)
      .then((result) => result.json())
      .then((data) => (setNews(data.hits),setLoading(false)));
  };

  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    // e.preventDefault()
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${search}`)

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button>search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  );
}

export default News;
