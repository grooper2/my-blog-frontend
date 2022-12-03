import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { UserContext } from "./context/userProvider";
import About from "./pages/about";
import ComponentsPage from "./pages/componentsPage";
import CreateComponentPage from "./pages/createComponentPage";
import Home from "./pages/home";
import Library from "./pages/library";
import LoginPage from "./pages/login/LoginPage";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <Routes>
          <Route
            path="/create_component"
            element={
              <PrivateRoute>
                <CreateComponentPage />
              </PrivateRoute>
            }
          />
          <Route path="/library/:id" element={<ComponentsPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
