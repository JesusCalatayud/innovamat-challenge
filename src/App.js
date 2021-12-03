import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ResourcesPage from "./views/pages/resources/ResourcesPage";
import DetailPage from "./views/pages/detail/DetailPage";
import ErrorPage from "./views/pages/error/ErrorPage";
import FavoritesPage from "./views/pages/favorites/FavoritesPage";
import { AppContainer } from "./appStyledComponents";

function App() {
  const activeSection = useSelector(({ resources }) => resources.activeSection);
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/favoritos/:favParameter" element={<FavoritesPage />} />
          <Route path="/recursos/:parameter" element={<ResourcesPage />} />
          <Route path="/recurso/:resourceId" element={<DetailPage />} />
          <Route
            path="/favoritos"
            element={<Navigate replace to={`/favoritos/${activeSection}`} />}
          />
          <Route
            path="/recursos"
            element={<Navigate replace to={`/recursos/${activeSection}`} />}
          />
          <Route
            path="/"
            element={<Navigate replace to={`/recursos/${activeSection}`} />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
