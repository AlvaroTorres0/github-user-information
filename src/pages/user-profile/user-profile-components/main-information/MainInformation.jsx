import "./MainInformation.css";
import { useResolutionContext } from "../../../../ResolutionContext";

function GeneralInfo({
  avatar,
  userName,
  name,
  memberSince,
  location,
  description,
  followers,
  following,
  repositories,
  twitterUsername,
  html_url,
}) {
  const URL_TWITTER_LOGO =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMi40NiA2Yy0uNzcuMzUtMS42LjU4LTIuNDYuNjljLjg4LS41MyAxLjU2LTEuMzcgMS44OC0yLjM4Yy0uODMuNS0xLjc1Ljg1LTIuNzIgMS4wNUMxOC4zNyA0LjUgMTcuMjYgNCAxNiA0Yy0yLjM1IDAtNC4yNyAxLjkyLTQuMjcgNC4yOWMwIC4zNC4wNC42Ny4xMS45OEM4LjI4IDkuMDkgNS4xMSA3LjM4IDMgNC43OWMtLjM3LjYzLS41OCAxLjM3LS41OCAyLjE1YzAgMS40OS43NSAyLjgxIDEuOTEgMy41NmMtLjcxIDAtMS4zNy0uMi0xLjk1LS41di4wM2MwIDIuMDggMS40OCAzLjgyIDMuNDQgNC4yMWE0LjIyIDQuMjIgMCAwIDEtMS45My4wN2E0LjI4IDQuMjggMCAwIDAgNCAyLjk4YTguNTIxIDguNTIxIDAgMCAxLTUuMzMgMS44NGMtLjM0IDAtLjY4LS4wMi0xLjAyLS4wNkMzLjQ0IDIwLjI5IDUuNyAyMSA4LjEyIDIxQzE2IDIxIDIwLjMzIDE0LjQ2IDIwLjMzIDguNzljMC0uMTkgMC0uMzctLjAxLS41NmMuODQtLjYgMS41Ni0xLjM2IDIuMTQtMi4yMyIvPjwvc3ZnPg==";
  const { isMobile } = useResolutionContext();

  const formatDate = (dateString) => {
    const options = { month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const handleClick = () => {
    window.open(html_url, "_blank");
  };

  return (
    <section className="section-info">
      <article className="section-info_img">
        <img src={avatar} alt="Imagen Usuario" />
        <span className="username">{userName}</span>
      </article>

      <article className="section-info_data">
        <div className="section-info_data-items">
          <span className="name">{name}</span>
          <div className="section-info_data-aditional">
            <span className="member-date">
              Member since {formatDate(memberSince)}
            </span>
            <span className="location">{location}</span>
          </div>
        </div>

        <div className="section-info_data-description">
          <span className="description-lbl">Description</span>
          <span className="description">
            {description ? description : "Not available"}
          </span>
        </div>
      </article>

      {!isMobile ? (
        <article className="section-info_stats">
          <div className="section-info_stats-container">
            <div className="card-stat">
              <span className="card-stat-item">Followers</span>
              <span className="card-stat-value">{followers}</span>
            </div>

            <div className="card-stat">
              <span className="card-stat-item">Following</span>
              <span className="card-stat-value">{following}</span>
            </div>

            <div className="card-stat">
              <span className="card-stat-item">Repositories</span>
              <span className="card-stat-value">{repositories}</span>
            </div>
          </div>

          <div className="section-info_stats-access">
            <button
              onClick={handleClick}
              className="section-info_stats-access--btn"
            >
              View profile
            </button>
            {twitterUsername && (
              <div className="section-info_stats--twitter">
                <img
                  className="twitter-logo"
                  src={URL_TWITTER_LOGO}
                  alt="Logo Twitter"
                />
                <span className="twitter-user">@{twitterUsername}</span>
              </div>
            )}
          </div>
        </article>
      ) : null}
    </section>
  );
}

export default GeneralInfo;
