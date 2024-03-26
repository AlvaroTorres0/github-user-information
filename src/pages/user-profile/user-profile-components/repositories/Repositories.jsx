import { useEffect } from "react";
import "./CardRepository.css";
import "./Repositories.css";
import { useRepositories } from "./useRepositories";
import Pagination from "../pagination/Pagination";
import { usePagination } from "../pagination/usePagination";
import { useResolutionContext } from "../../../../ResolutionContext";

function CardRepository({ description, forks, name, watchers }) {
  const ICON_FORK =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTEyNCAxNjYuMjkxdjE3OS40MThhNzYgNzYgMCAxIDAgMzIgMFYyODJoMTUyYTgwLjA5MSA4MC4wOTEgMCAwIDAgODAtODB2LTM2LjY4OWE3NS45ODMgNzUuOTgzIDAgMSAwLTMyIDEuNzMzVjIwMmE0OC4wNTUgNDguMDU1IDAgMCAxLTQ4IDQ4SDE1NnYtODMuNzA5YTc2IDc2IDAgMSAwLTMyIDBNMzI0IDkyYTQ0IDQ0IDAgMSAxIDQ0IDQ0YTQ0LjA0OSA0NC4wNDkgMCAwIDEtNDQtNDRNMTg0IDQyMGE0NCA0NCAwIDEgMS00NC00NGE0NC4wNDkgNDQuMDQ5IDAgMCAxIDQ0IDQ0TTE0MCA0OGE0NCA0NCAwIDEgMS00NCA0NGE0NC4wNDkgNDQuMDQ5IDAgMCAxIDQ0LTQ0Ii8+PC9zdmc+";
  const ICON_WATCHERS =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiA5YTMgMyAwIDAgMC0zIDNhMyAzIDAgMCAwIDMgM2EzIDMgMCAwIDAgMy0zYTMgMyAwIDAgMC0zLTNtMCA4YTUgNSAwIDAgMS01LTVhNSA1IDAgMCAxIDUtNWE1IDUgMCAwIDEgNSA1YTUgNSAwIDAgMS01IDVtMC0xMi41QzcgNC41IDIuNzMgNy42MSAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjVzOS4yNy0zLjExIDExLTcuNWMtMS43My00LjM5LTYtNy41LTExLTcuNSIvPjwvc3ZnPg==";
  const ICON_PUBLIC =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiAyMnEtMi4wNzUgMC0zLjktLjc4OHQtMy4xNzUtMi4xMzdxLTEuMzUtMS4zNS0yLjEzNy0zLjE3NVQyIDEycTAtMi4wNzUuNzg4LTMuOXQyLjEzNy0zLjE3NXExLjM1LTEuMzUgMy4xNzUtMi4xMzdUMTIgMnEyLjA3NSAwIDMuOS43ODh0My4xNzUgMi4xMzdxMS4zNSAxLjM1IDIuMTM4IDMuMTc1VDIyIDEycTAgMi4wNzUtLjc4OCAzLjl0LTIuMTM3IDMuMTc1cS0xLjM1IDEuMzUtMy4xNzUgMi4xMzhUMTIgMjJtLTEtMi4wNVYxOHEtLjgyNSAwLTEuNDEyLS41ODdUOSAxNnYtMWwtNC44LTQuOHEtLjA3NS40NS0uMTM3LjlUNCAxMnEwIDMuMDI1IDEuOTg4IDUuM1QxMSAxOS45NW02LjktMi41NXEuNS0uNTUuOS0xLjE4N3QuNjYyLTEuMzI1cS4yNjMtLjY4OC40LTEuNDEzVDIwIDEycTAtMi40NS0xLjM2My00LjQ3NVQxNSA0LjZWNXEwIC44MjUtLjU4NyAxLjQxM1QxMyA3aC0ydjJxMCAuNDI1LS4yODguNzEzVDEwIDEwSDh2Mmg2cS40MjUgMCAuNzEzLjI4OFQxNSAxM3YzaDFxLjY1IDAgMS4xNzUuMzg4VDE3LjkgMTcuNCIvPjwvc3ZnPg==";
  const { isMobile } = useResolutionContext();

  return (
    <section className="card-repository">
      <div className="card-repository-info">
        <h3 className="repository-name">{name}</h3>
        <p className="repository-description">{description}</p>
      </div>

      {!isMobile ? (
        <div className="repository-stats">
          <div className="repository-stat">
            <div className="repository-stat-header">
              <img className="repository-stat-icon" src={ICON_FORK} alt="" />
              <span className="repository-stat-title">Forks</span>
            </div>
            <span className="repository-stat-value">{forks}</span>
          </div>
          <div className="repository-stat">
            <div className="repository-stat-header">
              <img
                className="repository-stat-icon"
                src={ICON_WATCHERS}
                alt=""
              />
              <span className="repository-stat-title">Watchers</span>
            </div>
            <span className="repository-stat-value">{watchers}</span>
          </div>
          <div className="repository-stat--visibility">
            <img className="repository-stat-icon" src={ICON_PUBLIC} alt="" />
            <span className="repository-stat-title">Public</span>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ListRepositories({ url_repositories }) {
  const { getRepositories, repositoriesData, errorResponse } =
    useRepositories();

  const {
    currentItems,
    handlePrevPaginate,
    handleNextPaginate,
    currentPage,
    totalPages,
  } = usePagination({ arrayItems: repositoriesData, itemsPerPage: 4 });

  useEffect(() => {
    const handleGetRepositories = async () => {
      getRepositories({ ENDPOINT: url_repositories });
    };

    handleGetRepositories();
  }, [url_repositories]);

  return (
    <article className="repositories">
      <h2 className="section-title">Public repositories</h2>
      <div className="repositories-list">
        {currentItems &&
          currentItems.map((repository) => (
            <CardRepository
              key={repository.id}
              description={repository.description}
              forks={repository.forks}
              name={repository.name}
              watchers={repository.watchers}
            />
          ))}
      </div>
      <div className="repositories-pagination">
        {repositoriesData && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePrevPaginate={handlePrevPaginate}
            handleNextPaginate={handleNextPaginate}
          />
        )}
      </div>
    </article>
  );
}

export default ListRepositories;
