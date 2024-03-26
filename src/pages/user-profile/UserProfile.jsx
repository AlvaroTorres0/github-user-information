import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import GeneralInfo from "./user-profile-components/main-information/MainInformation";
import { useParams } from "react-router-dom";
import "./UserProfile.css";
import Repositories from "./user-profile-components/repositories/Repositories";
import Followers from "../user-profile/user-profile-components/followers/Followers";
import { useResolutionContext } from "../../ResolutionContext";
import { useState } from "react";

function UserProfile() {
  const { getUser, userData } = useUser();
  const { username } = useParams();
  const { isMobile } = useResolutionContext();
  const [containerStyles, setContainerStyles] = useState({ width: "90%" });

  useEffect(() => {
    getUser({ search: username });
  }, [username]);

  return (
    <section className="user-profile" style={isMobile ? containerStyles : null}>
      <>
        {userData && (
          <GeneralInfo
            avatar={userData.avatar_url}
            userName={userData.login}
            name={userData.name}
            memberSince={userData.created_at}
            location={userData.location}
            description={userData.bio}
            followers={userData.followers}
            following={userData.following}
            repositories={userData.public_repos}
            twitterUsername={userData.twitter_username}
          />
        )}
      </>

      <>
        {userData && userData.repos_url && (
          <Repositories url_repositories={userData.repos_url} />
        )}
      </>

      <>
        {userData && userData.followers_url && (
          <Followers url={userData.followers_url} />
        )}
      </>

      <>
        {userData && userData.following_url && (
          <Followers
            url={`https://api.github.com/users/${username}/following`}
          />
        )}
      </>
    </section>
  );
}

export default UserProfile;
