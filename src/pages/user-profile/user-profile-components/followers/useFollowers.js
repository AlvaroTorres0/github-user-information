import { useState, useCallback } from "react";
import { getGitHubData } from "../../../../github-service";

export function useFollowers() {
  const [followers, setFollowers] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);

  const getFollowers = useCallback(async ({ ENDPOINT }) => {
    setFollowers(null);

    try {
      const userResponse = await getGitHubData({ ENDPOINT });
      setFollowers(userResponse);
    } catch (error) {
      setErrorResponse(error.message);
    }
  }, []);

  return { getFollowers, followers, errorResponse };
}
