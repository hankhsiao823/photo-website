import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const HomaPage = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState();
  const [page, setPage] = useState();
  const [currentSearch, setCurrentSearch] = useState("");
  // const auth = "563492ad6f917000010000010626162fbbf04a13ae230f5474028ff6";
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const sreacgURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  const search = async (url) => {
    setPage(2);
    const dataFatch = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: process.env.REACT_APP_API_KEY },
    });
    let parseData = await dataFatch.json();
    setData(parseData.photos);
  };

  const morepicture = async () => {
    let newURL;
    setPage(page + 1);
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    }
    const dataFatch = await fetch(newURL, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: process.env.REACT_APP_API_KEY },
    });
    let parseData = await dataFatch.json();
    setData(data.concat(parseData.photos));
  };

  useEffect(() => {
    if (currentSearch === "") {
      search(intialURL);
    } else {
      search(sreacgURL);
    }
  }, [currentSearch]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((data) => {
            return <Picture data={data} key={data.id} />;
          })}
      </div>
      <div className="morepictures">
        <button onClick={morepicture}>更多展開</button>
      </div>
    </div>
  );
};

export default HomaPage;
