import { getGitHubData } from "../github-service";
import { useCallback, useState } from "react";

export function useUser() {
  const [userData, setUserData] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);

  //* Utilizamos useCallback para que la función no se vuelva a crear en cada renderizado
  const getUser = useCallback(async ({ search }) => {
    setUserData(null);
    const ENDPOINT = `https://api.github.com/users/${search}`;
    try {
      if (search.trim() === "") return;
      const userResponse = await getGitHubData({ ENDPOINT });
      setUserData(userResponse);
    } catch (error) {
      setErrorResponse(error.message);
    }
  }, []);

  return { getUser, userData, errorResponse };
}
