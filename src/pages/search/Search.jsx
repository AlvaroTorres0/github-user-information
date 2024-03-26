import { useState, useEffect, useRef, useCallback } from "react";
import "./Search.css";
import { UserCard } from "./user-card/UserCard";
import { useUser } from "../../hooks/useUser";
import debounce from "just-debounce-it";

function useSearch() {
  const [search, setSearch] = useState("");
  const [errorSearch, setErrorSearch] = useState("Enter a Github username");
  const [stylesSpan, setStylesSpan] = useState({ color: "#888" });
  const isFirstTimeUseInput = useRef(true);

  useEffect(() => {
    if (search !== "") {
      setErrorSearch("");
    }
    if (isFirstTimeUseInput.current) {
      isFirstTimeUseInput.current = search === "";
      return;
    }
    if (search === "") {
      setErrorSearch("Empty search, please enter a GitHub username");
      setStylesSpan({ color: "#ffff0099" });
    }
  }, [search]);

  return { search, setSearch, stylesSpan, errorSearch };
}

function Search() {
  const { search, setSearch, stylesSpan, errorSearch } = useSearch();
  const { getUser, userData, errorResponse } = useUser();

  const handleChangeSearch = async (event) => {
    if (event.target.value.startsWith(" ")) {
      return;
    }
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedSearch(newSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const debouncedSearch = useCallback(
    debounce(async (search) => {
      await getUser({ search });
    }, 1000),
    []
  );

  return (
    <div className="principal">
      <header>
        <form className="search" onSubmit={handleSubmit}>
          <div className="search_input">
            <input
              className="input"
              type="text"
              placeholder="Ex: AlvaroTorres0"
              value={search}
              onChange={handleChangeSearch}
            />
            <span className="error-search" style={stylesSpan}>
              {errorSearch}
            </span>
          </div>
        </form>
      </header>

      <main>
        {errorResponse && (
          <div className="error-response">
            <p>{errorResponse}</p>
          </div>
        )}

        {userData && (
          <UserCard
            avatar_url={userData.avatar_url}
            login={userData.login}
            url={userData.html_url}
            name={userData.name}
          ></UserCard>
        )}
      </main>
    </div>
  );
}

export default Search;
