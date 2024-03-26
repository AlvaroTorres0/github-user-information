export async function getGitHubData({ ENDPOINT }) {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    if (data.message) throw new Error();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("User not found :(");
  }
}
