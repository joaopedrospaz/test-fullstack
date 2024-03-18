import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UpdatePage from "./pages/updatePage";
import CreatePage from "./pages/CreatePage";
function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update" element={<UpdatePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
