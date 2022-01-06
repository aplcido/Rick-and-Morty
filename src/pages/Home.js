import React, { useEffect, useState } from "react";
import axios from "axios";
import CharactersList from "../components/CharactersList";

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchData = (url) => {
    axios
      .get(url)
      .then((data) => {
        setData(data.data.results);
        setPage(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchData(page.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchData(page.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <div className="container py-5">
        <nav>
          <ul className="pagination justify-content-center">
            {page.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {page.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <CharactersList characters={data} />
    </>
  );
}

export default Home;
