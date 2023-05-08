import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import PageHome from "./Pages/PageHome";
import PageUser from "./Pages/PageUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageHome />} />
        <Route path="tweets" element={<PageUser />} />
      </Route>
    </Routes>
  );
}

export default App;
