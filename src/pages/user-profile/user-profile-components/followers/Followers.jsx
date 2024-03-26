import "./CardFollower.css";
import "./Followers.css";
import Pagination from "../pagination/Pagination";
import { usePagination } from "../pagination/usePagination";
import { useFollowers } from "./useFollowers";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CardFollower({ avatar, userName }) {
  return (
    <div className="small-user-card">
      <img className="small-user-card_avatar" src={avatar} alt="User avatar" />

      <div className="small-user-card_info">
        <span className="card_info-username">{userName}</span>
        <Link to={`/profile/${userName}`} className="link-no-decoration">
          <span className="card_info-view">View profile</span>
        </Link>
      </div>
    </div>
  );
}

function ListFollowers({ url }) {
  const { getFollowers, followers, errorResponse } = useFollowers();
  const {
    currentItems,
    handlePrevPaginate,
    handleNextPaginate,
    currentPage: page,
    totalPages,
  } = usePagination({ arrayItems: followers, itemsPerPage: 8 });

  useEffect(() => {
    const handleGetFollowers = async () => {
      getFollowers({ ENDPOINT: url });
    };

    handleGetFollowers();
  }, [url, getFollowers]);

  return (
    <article className="followers">
      <h2 className="section-title">Followers</h2>
      <div className="followers-list">
        {followers &&
          currentItems.map((follower) => (
            <CardFollower
              key={follower.id}
              avatar={follower.avatar_url}
              userName={follower.login}
              html_url={follower.html_url}
            />
          ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePrevPaginate={handlePrevPaginate}
        handleNextPaginate={handleNextPaginate}
      />
    </article>
  );
}

export default ListFollowers;
