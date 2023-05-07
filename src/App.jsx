// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import PageHome from "./Pages/PageHome";
import PageUser from "./Pages/PageUser";

function App() {
  // <Routes>
  //   <Route path="/PageHome" element={<Layout />}>
  //     <Route path="PageHome" element={<PageHome />} />
  //     <Route path="PageUser" element={<PageUser />} />
  //   </Route>
  // </Routes>;
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
