import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/search/Search";
import UserProfile from "./pages/user-profile/UserProfile";
import { ResolutionProvider } from "./ResolutionContext";

function App() {
  return (
    <>
      <ResolutionProvider>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile/:username" element={<UserProfile />} />
        </Routes>
      </ResolutionProvider>
    </>
  );
}

export default App;
