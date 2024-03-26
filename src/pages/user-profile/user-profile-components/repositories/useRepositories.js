import { useCallback, useState } from "react";
import { getGitHubData } from "../../../../github-service";

export function useRepositories() {
  const [repositoriesData, setRepositoriesData] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);

  const getRepositories = useCallback(async ({ ENDPOINT }) => {
    setRepositoriesData(null);
    try {
      const userResponse = await getGitHubData({ ENDPOINT });
      setRepositoriesData(userResponse);
    } catch (error) {
      setErrorResponse(error.message);
    }
  }, []);

  return { getRepositories, repositoriesData, errorResponse };
}
