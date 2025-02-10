import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import NavLayout from "./layout/NavLayout/NavLayout";
import { PAGE_ROUTES } from "./constants/routes";
import Home from "./views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route path={PAGE_ROUTES.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
